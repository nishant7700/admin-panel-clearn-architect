import {
  GET_PATIENTS,
  ADD_PATIENT,
  EDIT_PATIENT,
  GET_PATIENT,
  RESET_PATIENT,
  PATIENTS_ERROR,
} from "../types/patient_type";

const initialState = {
  patients: null,
  patient: null,
  total_patients: 0,
  loading: true,
  error: {},
  patient_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PATIENTS:
      return {
        ...state,
        patients: payload,
        loading: false,
        error: {},
      };

    case RESET_PATIENT:
      return {
        ...state,
        patient: null,
        loading: true,
        error: {},
      };

    case ADD_PATIENT:
      return {
        ...state,
        patient_message: payload,
        loading: false,
        error: {},
      };
    case GET_PATIENT:
      return {
        ...state,
        patient: payload,
        loading: false,
        error: {},
      };
    case EDIT_PATIENT:
      return {
        ...state,
        patient_message: payload,
        loading: false,
        error: {},
      };

    case PATIENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
