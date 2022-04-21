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
  GET_NEWSLETTERS,
  ADD_NEWSLETTER,
  GET_NEWSLETTER,
  RESET_NEWSLETTER,
  NEWSLETTERS_ERROR,
} from "../types/newsletter_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET NEWSLETTERS
const newslettersRef = collection(db, "newsletters");
export const getNewsletters =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(newslettersRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          newslettersRef,
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
        type: GET_NEWSLETTERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: NEWSLETTERS_ERROR,
      });
    }
  };

export const getNextNewsletters =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          newslettersRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          newslettersRef,
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
        type: GET_NEWSLETTERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: NEWSLETTERS_ERROR,
      });
    }
  };
export const getPreviousNewsletters =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          newslettersRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          newslettersRef,
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
        type: GET_NEWSLETTERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: NEWSLETTERS_ERROR,
      });
    }
  };

export const addNewsletter = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(newslettersRef, data);
    dispatch({
      type: ADD_NEWSLETTER,
    });
    dispatch(setAlert("Newsletter added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: NEWSLETTERS_ERROR,
    });
  }
};

export const getNewsletter = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_NEWSLETTER,
    });
    const docRef = doc(db, "newsletters", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_NEWSLETTER,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: NEWSLETTERS_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: NEWSLETTERS_ERROR,
    });
  }
};
export const editNewsletter = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "newsletters", id), data);
    dispatch(setAlert("Newsletter updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: NEWSLETTERS_ERROR,
    });
  }
};

export const deleteNewsletter = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "newsletters", id));
    dispatch(setAlert("Newsletter deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: NEWSLETTERS_ERROR,
    });
  }
};
