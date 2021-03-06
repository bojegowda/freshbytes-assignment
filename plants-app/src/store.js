import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers
} from "redux";

import thunk from "redux-thunk";

import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";
import {
  plantsReducer
} from "./reducers/plantsReducers"

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  plants: plantsReducer

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
