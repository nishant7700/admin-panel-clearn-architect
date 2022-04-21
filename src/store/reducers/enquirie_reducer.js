import {
  GET_ENQUIRIES,
  ADD_ENQUIRIE,
  EDIT_ENQUIRIE,
  GET_ENQUIRIE,
  RESET_ENQUIRIE,
  ENQUIRIES_ERROR,
} from "../types/enquirie_type";

const initialState = {
  enquiries: null,
  enquirie: null,
  total_enquiries: 0,
  loading: true,
  error: {},
  enquirie_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ENQUIRIES:
      return {
        ...state,
        enquiries: payload,
        loading: false,
        error: {},
      };

    case RESET_ENQUIRIE:
      return {
        ...state,
        enquirie: null,
        loading: true,
        error: {},
      };

    case ADD_ENQUIRIE:
      return {
        ...state,
        enquirie_message: payload,
        loading: false,
        error: {},
      };
    case GET_ENQUIRIE:
      return {
        ...state,
        enquirie: payload,
        loading: false,
        error: {},
      };
    case EDIT_ENQUIRIE:
      return {
        ...state,
        enquirie_message: payload,
        loading: false,
        error: {},
      };

    case ENQUIRIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
