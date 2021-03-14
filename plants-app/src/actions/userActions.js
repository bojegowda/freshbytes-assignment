import Axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
} from "../constants/userConstants";

export const register = (name, username, password, dob) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: {
      name,
      username,
      password,
      dob,
    },
  });
};

export const signin = (username, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: {
      username,
      password,
    },
  });
  try {
    const { data } = await Axios.post("/api/users/signin", {
      username,
      password,
    });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_SIGNOUT,
  });
};
