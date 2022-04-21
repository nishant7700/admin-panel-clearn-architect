import {
  GET_CALAMITIES,
  ADD_CALAMITIE,
  EDIT_CALAMITIE,
  GET_CALAMITIE,
  RESET_CALAMITIE,
  CALAMITIES_ERROR,
} from "../types/calamitie_type";

const initialState = {
  calamities: null,
  calamitie: null,
  total_calamities: 0,
  loading: true,
  error: {},
  calamitie_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CALAMITIES:
      return {
        ...state,
        calamities: payload,
        loading: false,
        error: {},
      };

    case RESET_CALAMITIE:
      return {
        ...state,
        calamitie: null,
        loading: true,
        error: {},
      };

    case ADD_CALAMITIE:
      return {
        ...state,
        calamitie_message: payload,
        loading: false,
        error: {},
      };
    case GET_CALAMITIE:
      return {
        ...state,
        calamitie: payload,
        loading: false,
        error: {},
      };
    case EDIT_CALAMITIE:
      return {
        ...state,
        calamitie_message: payload,
        loading: false,
        error: {},
      };

    case CALAMITIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
