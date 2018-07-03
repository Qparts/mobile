import {
    SIGNUP_FAILED,
    SIGNUP_REG,
    SIGNUP_SUCCESS
  } from './types';
  import userControllers from "../providers/controllers/UsersAPIControllers";

  const handleResponse = (dispatch, data ) => {
    if (data.success) {
      dispatch({ type: SIGNUP_REG })
    }else{
      dispatch({ type: SIGNUP_FAILED, error: data.message })
    }
  }
  
  export const signupUser = (user) => {
    return (dispatch) => {
      dispatch({ type: SIGNUP_SUCCESS });
    
    }
  }
  