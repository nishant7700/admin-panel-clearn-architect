import {
  GET_MOBILES,
  ADD_MOBILE,
  EDIT_MOBILE,
  GET_MOBILE,
  RESET_MOBILE,
  MOBILES_ERROR,
} from "../types/mobile_type";

const initialState = {
  mobiles: null,
  mobile: null,
  total_mobiles: 0,
  loading: true,
  error: {},
  mobile_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MOBILES:
      return {
        ...state,
        mobiles: payload,
        loading: false,
        error: {},
      };

    case RESET_MOBILE:
      return {
        ...state,
        mobile: null,
        loading: true,
        error: {},
      };

    case ADD_MOBILE:
      return {
        ...state,
        mobile_message: payload,
        loading: false,
        error: {},
      };
    case GET_MOBILE:
      return {
        ...state,
        mobile: payload,
        loading: false,
        error: {},
      };
    case EDIT_MOBILE:
      return {
        ...state,
        mobile_message: payload,
        loading: false,
        error: {},
      };

    case MOBILES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
