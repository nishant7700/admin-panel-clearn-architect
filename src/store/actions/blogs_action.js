import { db } from "../../shared/config";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  startAfter,
  endBefore,
  limitToLast,
  limit,
  Timestamp,
  where,
} from "firebase/firestore";
import {
  GET_BLOGS,
  ADD_BLOG,
  GET_BLOG,
  RESET_BLOG,
  BLOGS_ERROR,
} from "../types/blog_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET BLOGS
const blogsRef = collection(db, "blogs");
export const getBlogs =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(blogsRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          blogsRef,
          orderBy(orderValue, orderType),
          limit(LIMIT)
        );
      }
      const querySnapshot = await getDocs(searchQuery);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      dispatch({
        type: GET_BLOGS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: BLOGS_ERROR,
      });
    }
  };

export const getNextBlogs =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      console.log("TERM", term);
      if (term) {
        searchQuery = query(
          blogsRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          blogsRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT)
        );
      }
      console.log("searchQuery", searchQuery);

      const querySnapshot = await getDocs(searchQuery);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      dispatch({
        type: GET_BLOGS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: BLOGS_ERROR,
      });
    }
  };
export const getPreviousBlogs =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          blogsRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          blogsRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT)
        );
      }

      const querySnapshot = await getDocs(searchQuery);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      dispatch({
        type: GET_BLOGS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: BLOGS_ERROR,
      });
    }
  };

export const addBlog = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(blogsRef, data);
    dispatch({
      type: ADD_BLOG,
    });
    dispatch(setAlert("Blog added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: BLOGS_ERROR,
    });
  }
};

export const getBlog = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_BLOG,
    });
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_BLOG,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: BLOGS_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: BLOGS_ERROR,
    });
  }
};
export const editBlog = (id, data) => async (dispatch) => {
  try {
    console.log("Data", data);
    const docSnap = await updateDoc(doc(db, "blogs", id), data);
    dispatch(setAlert("Blog updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: BLOGS_ERROR,
    });
  }
};

export const deleteBlog = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "blogs", id));
    dispatch(setAlert("Blog deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: BLOGS_ERROR,
    });
  }
};
