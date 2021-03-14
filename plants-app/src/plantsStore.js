import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers
} from "redux";
import thunk from "redux-thunk";

import {
  plantsRegisterReducer,

} from "./reducers/plantsReducers";

const initialState = {
  plantsInfo: localStorage.getItem("plantsInfo") ?
    JSON.parse(localStorage.getItem("plantsInfo")) : null,
};
const reducer = combineReducers({

  plantsRegister: plantsRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
