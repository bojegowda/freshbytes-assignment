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
  userInfo: [],
  loading: false
}

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: false, userInfo: [...state.userInfo, action.payload]
      };

    default:
      return state;
  }
};

const defaultSignInState = {
  isLoggedIn: false,
  loggedInUser: null
}

export const userSigninReducer = (state = defaultSignInState, action) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return {
        isLoggedIn: true, loggedInUser: action.payload
      };
    case USER_SIGNIN_FAIL:
      return {
        isLoggedIn: false, loggedInUser: null, error: action.payload
      };
    case USER_SIGNOUT:
      return defaultSignInState;
    default:
      return state;
  }
};
