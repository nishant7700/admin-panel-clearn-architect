import {
  GET_ECSS,
  ADD_ECS,
  EDIT_ECS,
  GET_ECS,
  RESET_ECS,
  ECSS_ERROR,
} from "../types/ecs_type";

const initialState = {
  ecss: null,
  ecs: null,
  total_ecss: 0,
  loading: true,
  error: {},
  ecs_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ECSS:
      return {
        ...state,
        ecss: payload,
        loading: false,
        error: {},
      };

    case RESET_ECS:
      return {
        ...state,
        ecs: null,
        loading: true,
        error: {},
      };

    case ADD_ECS:
      return {
        ...state,
        ecs_message: payload,
        loading: false,
        error: {},
      };
    case GET_ECS:
      return {
        ...state,
        ecs: payload,
        loading: false,
        error: {},
      };
    case EDIT_ECS:
      return {
        ...state,
        ecs_message: payload,
        loading: false,
        error: {},
      };

    case ECSS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
