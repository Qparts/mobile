import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED } from "./types";
import { AsyncStorage } from "react-native";
import userControllers from "../providers/controllers/UsersAPIControllers";

const onLoginSuccess = (dispatch, user, token) => {
  AsyncStorage.setItem("app_token", token).then(() => {
    AsyncStorage.setItem("user", user);
    dispatch({ type: LOGIN_SUCCESS, user });
  });
};

const onLoginFailed = (dispatch, errorMessage) => {
  dispatch({ type: LOGIN_FAILED, error: errorMessage });
};

const handleResponse = (dispatch, data, token) => {
  onLoginSuccess(dispatch, data, token);
};
export const loginUser = ({ username, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_ATTEMPT });
    new userControllers()
      .login({ email: username, password })
      .then(res => {
        if (JSON.stringify(res.customer)) {
          handleResponse(
            dispatch,
            JSON.stringify(res.customer),
            JSON.stringify(res.token)
          );
        } else {
          onLoginFailed(dispatch, res[0]);
        }
      })
      .catch(err => {
        onLoginFailed(dispatch, err);
      });
  };
};
