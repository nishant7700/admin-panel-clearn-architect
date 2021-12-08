import { auth } from "../../shared/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updatePassword,
} from "firebase/auth";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_PROFILE,
} from "../types/auth_type";
import { setAlert } from "./alert";
export const loadUser = () => async (dispatch) => {
  try {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch({
          type: USER_LOADED,
          payload: currentUser,
        });
      } else {
        dispatch({
          type: AUTH_ERROR,
        });
      }
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
export const register = (formData) => async (dispatch) => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    console.log(result);
    loadUser();
  } catch (err) {
    console.log(err);
  }
};
export const login = (formData) => async (dispatch) => {
  try {
    const result = await signInWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    console.log(result);
    dispatch(setAlert("Login Successfully", "success"));
  } catch (err) {
    console.log(err);
    dispatch(setAlert("Username or password is wrong", "danger"));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
export const changePassword = (password) => async (dispatch) => {
  try {
    const user = auth.currentUser;
    const result = await updatePassword(user, password);
    console.log(result);

    dispatch(setAlert("Password changed successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    console.log(err);
  }
};
export const logout = () => async (dispatch) => {
  try {
    const result = await signOut(auth);

    console.log(result);
    dispatch({
      type: LOGOUT,
    });
  } catch (err) {
    console.log(err);
  }
};
