   
   import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILED
  } from './types';
  import { AsyncStorage } from 'react-native';

  const onLoginSuccess = (dispatch, user, token) => {

    AsyncStorage.setItem('app_token',token)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS, user })
      });
  };
  
  const onLoginFailed = (dispatch, errorMessage) => {
    dispatch({ type: LOGIN_FAILED, error: errorMessage})
  };
  
  const handleResponse = (dispatch, data) => {
    if (!data.success) {
      onLoginFailed(dispatch, data.message);
    }else {
      onLoginSuccess(dispatch, data.user, data.token)
    }
  }
  export const loginUser = ({ username, password }) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_ATTEMPT });
  
      //Call the back-end API
      //Please do not spam/abuse it so others can use it as well.
      const data ={
        success:true,
        message:'login now',
        user:{
          username:'emad@asd.com',
          password:'123',
        },
        token:'asdasd56as4d65a4d6a5sd4a6s5d4gfd64g5',

      }
      handleResponse(dispatch, data);
   }
}