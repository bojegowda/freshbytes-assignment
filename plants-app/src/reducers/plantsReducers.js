import {
  PLANTS_REGISTER_FAIL,
  PLANTS_REGISTER_REQUEST,
  PLANTS_REGISTER_SUCCESS,

} from '../constants/plantsConstants';

const initialState = {
  name: "",
  description: ""
}

export const plantsRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLANTS_REGISTER_REQUEST:
      return {
        loading: false, userInfo: action.payload
      };

    default:
      return state;
  }
};
