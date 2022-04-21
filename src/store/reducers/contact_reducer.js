import {
  GET_CONTACTS,
  ADD_CONTACT,
  EDIT_CONTACT,
  GET_CONTACT,
  RESET_CONTACT,
  CONTACTS_ERROR,
} from "../types/contact_type";

const initialState = {
  contacts: null,
  contact: null,
  total_contacts: 0,
  loading: true,
  error: {},
  contact_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
        loading: false,
        error: {},
      };

    case RESET_CONTACT:
      return {
        ...state,
        contact: null,
        loading: true,
        error: {},
      };

    case ADD_CONTACT:
      return {
        ...state,
        contact_message: payload,
        loading: false,
        error: {},
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: payload,
        loading: false,
        error: {},
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contact_message: payload,
        loading: false,
        error: {},
      };

    case CONTACTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
