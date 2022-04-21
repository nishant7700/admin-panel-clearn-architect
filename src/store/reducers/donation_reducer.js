import {
  GET_DONATIONS,
  ADD_DONATION,
  EDIT_DONATION,
  GET_DONATION,
  RESET_DONATION,
  DONATIONS_ERROR,
} from "../types/donation_type";

const initialState = {
  donations: null,
  donation: null,
  total_donations: 0,
  loading: true,
  error: {},
  donation_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DONATIONS:
      return {
        ...state,
        donations: payload,
        loading: false,
        error: {},
      };

    case RESET_DONATION:
      return {
        ...state,
        donation: null,
        loading: true,
        error: {},
      };

    case ADD_DONATION:
      return {
        ...state,
        donation_message: payload,
        loading: false,
        error: {},
      };
    case GET_DONATION:
      return {
        ...state,
        donation: payload,
        loading: false,
        error: {},
      };
    case EDIT_DONATION:
      return {
        ...state,
        donation_message: payload,
        loading: false,
        error: {},
      };

    case DONATIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
