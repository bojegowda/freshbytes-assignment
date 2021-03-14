import Axios from "axios";
import {
  PLANTS_REGISTER_REQUEST,
} from "../constants/plantsConstants";

export const register = (name, description) => async (dispatch) => {
  dispatch({
    type: PLANTS_REGISTER_REQUEST,
    payload: {
      name,
      description,
    },
  });

};
