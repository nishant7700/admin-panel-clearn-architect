import {
  GET_BANNERS,
  ADD_BANNER,
  EDIT_BANNER,
  GET_BANNER,
  RESET_BANNER,
  BANNERS_ERROR,
} from "../types/banner_type";

const initialState = {
  banners: null,
  banner: null,
  total_banners: 0,
  loading: true,
  error: {},
  banner_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BANNERS:
      return {
        ...state,
        banners: payload,
        loading: false,
        error: {},
      };

    case RESET_BANNER:
      return {
        ...state,
        banner: null,
        loading: true,
        error: {},
      };

    case ADD_BANNER:
      return {
        ...state,
        banner_message: payload,
        loading: false,
        error: {},
      };
    case GET_BANNER:
      return {
        ...state,
        banner: payload,
        loading: false,
        error: {},
      };
    case EDIT_BANNER:
      return {
        ...state,
        banner_message: payload,
        loading: false,
        error: {},
      };

    case BANNERS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
