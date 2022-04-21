import {
  GET_CAUSES,
  ADD_CAUSE,
  EDIT_CAUSE,
  GET_CAUSE,
  RESET_CAUSE,
  CAUSES_ERROR,
} from "../types/cause_type";

const initialState = {
  causes: null,
  cause: null,
  total_causes: 0,
  loading: true,
  error: {},
  cause_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CAUSES:
      return {
        ...state,
        causes: payload,
        loading: false,
        error: {},
      };

    case RESET_CAUSE:
      return {
        ...state,
        cause: null,
        loading: true,
        error: {},
      };

    case ADD_CAUSE:
      return {
        ...state,
        cause_message: payload,
        loading: false,
        error: {},
      };
    case GET_CAUSE:
      return {
        ...state,
        cause: payload,
        loading: false,
        error: {},
      };
    case EDIT_CAUSE:
      return {
        ...state,
        cause_message: payload,
        loading: false,
        error: {},
      };

    case CAUSES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
