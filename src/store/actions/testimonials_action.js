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
  GET_TESTIMONIALS,
  ADD_TESTIMONIAL,
  GET_TESTIMONIAL,
  RESET_TESTIMONIAL,
  TESTIMONIALS_ERROR,
} from "../types/testimonial_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET TESTIMONIALS
const testimonialsRef = collection(db, "testimonials");
export const getTestimonials =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(testimonialsRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          testimonialsRef,
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
        type: GET_TESTIMONIALS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: TESTIMONIALS_ERROR,
      });
    }
  };

export const getNextTestimonials =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          testimonialsRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          testimonialsRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT)
        );
      }
      const querySnapshot = await getDocs(searchQuery);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      dispatch({
        type: GET_TESTIMONIALS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: TESTIMONIALS_ERROR,
      });
    }
  };
export const getPreviousTestimonials =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          testimonialsRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          testimonialsRef,
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
        type: GET_TESTIMONIALS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: TESTIMONIALS_ERROR,
      });
    }
  };

export const addTestimonial = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(testimonialsRef, data);
    dispatch({
      type: ADD_TESTIMONIAL,
    });
    dispatch(setAlert("Testimonial added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: TESTIMONIALS_ERROR,
    });
  }
};

export const getTestimonial = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_TESTIMONIAL,
    });
    const docRef = doc(db, "testimonials", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_TESTIMONIAL,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: TESTIMONIALS_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: TESTIMONIALS_ERROR,
    });
  }
};
export const editTestimonial = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "testimonials", id), data);
    dispatch(setAlert("Testimonial updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: TESTIMONIALS_ERROR,
    });
  }
};

export const deleteTestimonial = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "testimonials", id));
    dispatch(setAlert("Testimonial deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: TESTIMONIALS_ERROR,
    });
  }
};
