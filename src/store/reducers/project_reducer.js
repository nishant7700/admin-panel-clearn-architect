import {
  GET_PROJECTS,
  ADD_PROJECT,
  EDIT_PROJECT,
  GET_PROJECT,
  RESET_PROJECT,
  PROJECTS_ERROR,
} from "../types/project_type";

const initialState = {
  projects: null,
  project: null,
  total_projects: 0,
  loading: true,
  error: {},
  project_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false,
        error: {},
      };

    case RESET_PROJECT:
      return {
        ...state,
        project: null,
        loading: true,
        error: {},
      };

    case ADD_PROJECT:
      return {
        ...state,
        project_message: payload,
        loading: false,
        error: {},
      };
    case GET_PROJECT:
      return {
        ...state,
        project: payload,
        loading: false,
        error: {},
      };
    case EDIT_PROJECT:
      return {
        ...state,
        project_message: payload,
        loading: false,
        error: {},
      };

    case PROJECTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
