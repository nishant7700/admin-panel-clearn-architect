import {
  GET_EVENTS,
  ADD_EVENT,
  EDIT_EVENT,
  GET_EVENT,
  RESET_EVENT,
  EVENTS_ERROR,
} from "../types/event_type";

const initialState = {
  events: null,
  event: null,
  total_events: 0,
  loading: true,
  error: {},
  event_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS:
      return {
        ...state,
        events: payload,
        loading: false,
        error: {},
      };

    case RESET_EVENT:
      return {
        ...state,
        event: null,
        loading: true,
        error: {},
      };

    case ADD_EVENT:
      return {
        ...state,
        event_message: payload,
        loading: false,
        error: {},
      };
    case GET_EVENT:
      return {
        ...state,
        event: payload,
        loading: false,
        error: {},
      };
    case EDIT_EVENT:
      return {
        ...state,
        event_message: payload,
        loading: false,
        error: {},
      };

    case EVENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
