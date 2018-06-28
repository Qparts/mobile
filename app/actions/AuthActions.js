   
   import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILED
  } from './types';
  import { AsyncStorage } from 'react-native';
  import userControllers from "../providers/controllers/UsersAPIControllers";

  const onLoginSuccess = (dispatch, user, token) => {
       console.log("onLogin"+user)
    AsyncStorage.setItem('app_token',token)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS, user })
      });
  };
  
  const onLoginFailed = (dispatch, errorMessage) => {
    dispatch({ type: LOGIN_FAILED, error: errorMessage})
  };
  
  const handleResponse = (dispatch, data,token) => {
    if (!data) {
      data.message='User Not Found';
      onLoginFailed(dispatch, data.message);
    }else {
      console.log("handleResponse>onLoginSuccess"+data)
      onLoginSuccess(dispatch, data, token)
    }
  }
  export const loginUser = ({ username, password }) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_ATTEMPT });
      new userControllers().login({email: username, password}).then(res => {
          if(JSON.stringify(res.customer)){
          handleResponse(dispatch, JSON.stringify(res.customer),JSON.stringify(res.token));

        }
      
    }).catch(err => {
        if (err) {
          console.error(error)
        }
    });
    };
}