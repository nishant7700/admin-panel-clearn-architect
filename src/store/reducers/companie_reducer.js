import {
  GET_COMPANIES,
  ADD_COMPANIE,
  EDIT_COMPANIE,
  GET_COMPANIE,
  RESET_COMPANIE,
  COMPANIES_ERROR,
} from "../types/companie_type";

const initialState = {
  companies: null,
  companie: null,
  total_companies: 0,
  loading: true,
  error: {},
  companie_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: payload,
        loading: false,
        error: {},
      };

    case RESET_COMPANIE:
      return {
        ...state,
        companie: null,
        loading: true,
        error: {},
      };

    case ADD_COMPANIE:
      return {
        ...state,
        companie_message: payload,
        loading: false,
        error: {},
      };
    case GET_COMPANIE:
      return {
        ...state,
        companie: payload,
        loading: false,
        error: {},
      };
    case EDIT_COMPANIE:
      return {
        ...state,
        companie_message: payload,
        loading: false,
        error: {},
      };

    case COMPANIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
