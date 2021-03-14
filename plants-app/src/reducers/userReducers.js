import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from '../constants/userConstants';

const initialState = {
  name: "",
  username: "",
  password: "",
  dob: ""
}

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: false, userInfo: action.payload
      };

    default:
      return state;
  }
};


export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        loading: true
      };
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false, userInfo: action.payload
      };
    case USER_SIGNIN_FAIL:
      return {
        loading: false, error: action.payload
      };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};