import {
  GET_BLOGS,
  ADD_BLOG,
  EDIT_BLOG,
  GET_BLOG,
  RESET_BLOG,
  BLOGS_ERROR,
} from "../types/blog_type";

const initialState = {
  blogs: null,
  blog: null,
  total_blogs: 0,
  loading: true,
  error: {},
  blog_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: payload,
        loading: false,
        error: {},
      };

    case RESET_BLOG:
      return {
        ...state,
        blog: null,
        loading: true,
        error: {},
      };

    case ADD_BLOG:
      return {
        ...state,
        blog_message: payload,
        loading: false,
        error: {},
      };
    case GET_BLOG:
      return {
        ...state,
        blog: payload,
        loading: false,
        error: {},
      };
    case EDIT_BLOG:
      return {
        ...state,
        blog_message: payload,
        loading: false,
        error: {},
      };

    case BLOGS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
