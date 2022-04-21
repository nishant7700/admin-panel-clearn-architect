import {
  GET_STORIES,
  ADD_STORIE,
  EDIT_STORIE,
  GET_STORIE,
  RESET_STORIE,
  STORIES_ERROR,
} from "../types/storie_type";

const initialState = {
  stories: null,
  storie: null,
  total_stories: 0,
  loading: true,
  error: {},
  storie_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STORIES:
      return {
        ...state,
        stories: payload,
        loading: false,
        error: {},
      };

    case RESET_STORIE:
      return {
        ...state,
        storie: null,
        loading: true,
        error: {},
      };

    case ADD_STORIE:
      return {
        ...state,
        storie_message: payload,
        loading: false,
        error: {},
      };
    case GET_STORIE:
      return {
        ...state,
        storie: payload,
        loading: false,
        error: {},
      };
    case EDIT_STORIE:
      return {
        ...state,
        storie_message: payload,
        loading: false,
        error: {},
      };

    case STORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
