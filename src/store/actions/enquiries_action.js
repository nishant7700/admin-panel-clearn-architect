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
  GET_ENQUIRIES,
  ADD_ENQUIRIE,
  GET_ENQUIRIE,
  RESET_ENQUIRIE,
  ENQUIRIES_ERROR,
} from "../types/enquirie_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET ENQUIRIES
const enquiriesRef = collection(db, "enquiries");
export const getEnquiries =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(enquiriesRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          enquiriesRef,
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
        type: GET_ENQUIRIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: ENQUIRIES_ERROR,
      });
    }
  };

export const getNextEnquiries =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          enquiriesRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          enquiriesRef,
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
        type: GET_ENQUIRIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: ENQUIRIES_ERROR,
      });
    }
  };
export const getPreviousEnquiries =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          enquiriesRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          enquiriesRef,
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
        type: GET_ENQUIRIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: ENQUIRIES_ERROR,
      });
    }
  };

export const addEnquirie = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(enquiriesRef, data);
    dispatch({
      type: ADD_ENQUIRIE,
    });
    dispatch(setAlert("Enquirie added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: ENQUIRIES_ERROR,
    });
  }
};

export const getEnquirie = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_ENQUIRIE,
    });
    const docRef = doc(db, "enquiries", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_ENQUIRIE,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: ENQUIRIES_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: ENQUIRIES_ERROR,
    });
  }
};
export const editEnquirie = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "enquiries", id), data);
    dispatch(setAlert("Enquirie updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: ENQUIRIES_ERROR,
    });
  }
};

export const deleteEnquirie = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "enquiries", id));
    dispatch(setAlert("Enquirie deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: ENQUIRIES_ERROR,
    });
  }
};
