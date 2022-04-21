import {
  GET_CHAMPIONS,
  ADD_CHAMPION,
  EDIT_CHAMPION,
  GET_CHAMPION,
  RESET_CHAMPION,
  CHAMPIONS_ERROR,
} from "../types/champion_type";

const initialState = {
  champions: null,
  champion: null,
  total_champions: 0,
  loading: true,
  error: {},
  champion_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CHAMPIONS:
      return {
        ...state,
        champions: payload,
        loading: false,
        error: {},
      };

    case RESET_CHAMPION:
      return {
        ...state,
        champion: null,
        loading: true,
        error: {},
      };

    case ADD_CHAMPION:
      return {
        ...state,
        champion_message: payload,
        loading: false,
        error: {},
      };
    case GET_CHAMPION:
      return {
        ...state,
        champion: payload,
        loading: false,
        error: {},
      };
    case EDIT_CHAMPION:
      return {
        ...state,
        champion_message: payload,
        loading: false,
        error: {},
      };

    case CHAMPIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
