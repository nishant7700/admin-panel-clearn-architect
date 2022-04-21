import {
  GET_TESTIMONIALS,
  ADD_TESTIMONIAL,
  EDIT_TESTIMONIAL,
  GET_TESTIMONIAL,
  RESET_TESTIMONIAL,
  TESTIMONIALS_ERROR,
} from "../types/testimonial_type";

const initialState = {
  testimonials: null,
  testimonial: null,
  total_testimonials: 0,
  loading: true,
  error: {},
  testimonial_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TESTIMONIALS:
      return {
        ...state,
        testimonials: payload,
        loading: false,
        error: {},
      };

    case RESET_TESTIMONIAL:
      return {
        ...state,
        testimonial: null,
        loading: true,
        error: {},
      };

    case ADD_TESTIMONIAL:
      return {
        ...state,
        testimonial_message: payload,
        loading: false,
        error: {},
      };
    case GET_TESTIMONIAL:
      return {
        ...state,
        testimonial: payload,
        loading: false,
        error: {},
      };
    case EDIT_TESTIMONIAL:
      return {
        ...state,
        testimonial_message: payload,
        loading: false,
        error: {},
      };

    case TESTIMONIALS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
