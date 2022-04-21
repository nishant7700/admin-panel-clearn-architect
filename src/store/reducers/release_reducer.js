import {
  GET_RELEASES,
  ADD_RELEASE,
  EDIT_RELEASE,
  GET_RELEASE,
  RESET_RELEASE,
  RELEASES_ERROR,
} from "../types/release_type";

const initialState = {
  releases: null,
  release: null,
  total_releases: 0,
  loading: true,
  error: {},
  release_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RELEASES:
      return {
        ...state,
        releases: payload,
        loading: false,
        error: {},
      };

    case RESET_RELEASE:
      return {
        ...state,
        release: null,
        loading: true,
        error: {},
      };

    case ADD_RELEASE:
      return {
        ...state,
        release_message: payload,
        loading: false,
        error: {},
      };
    case GET_RELEASE:
      return {
        ...state,
        release: payload,
        loading: false,
        error: {},
      };
    case EDIT_RELEASE:
      return {
        ...state,
        release_message: payload,
        loading: false,
        error: {},
      };

    case RELEASES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
