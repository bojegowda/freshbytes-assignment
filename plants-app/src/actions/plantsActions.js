import Axios from "axios";
import {
  PLANTS_REGISTER_REQUEST,

} from "../constants/userConstants";

export const register = (name, description) => async (dispatch) => {
  dispatch({
    type: PLANTS_REGISTER_REQUEST,
    payload: {
      name,
      description,
    },
  });

};
