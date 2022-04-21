import {
  GET_VOLUNTEERS,
  ADD_VOLUNTEER,
  EDIT_VOLUNTEER,
  GET_VOLUNTEER,
  RESET_VOLUNTEER,
  VOLUNTEERS_ERROR,
} from "../types/volunteer_type";

const initialState = {
  volunteers: null,
  volunteer: null,
  total_volunteers: 0,
  loading: true,
  error: {},
  volunteer_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_VOLUNTEERS:
      return {
        ...state,
        volunteers: payload,
        loading: false,
        error: {},
      };

    case RESET_VOLUNTEER:
      return {
        ...state,
        volunteer: null,
        loading: true,
        error: {},
      };

    case ADD_VOLUNTEER:
      return {
        ...state,
        volunteer_message: payload,
        loading: false,
        error: {},
      };
    case GET_VOLUNTEER:
      return {
        ...state,
        volunteer: payload,
        loading: false,
        error: {},
      };
    case EDIT_VOLUNTEER:
      return {
        ...state,
        volunteer_message: payload,
        loading: false,
        error: {},
      };

    case VOLUNTEERS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
