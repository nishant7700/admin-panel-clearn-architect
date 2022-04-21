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
  GET_CAUSES,
  ADD_CAUSE,
  GET_CAUSE,
  RESET_CAUSE,
  CAUSES_ERROR,
} from "../types/cause_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET CAUSES
const causesRef = collection(db, "causes");
export const getCauses =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(causesRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          causesRef,
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
        type: GET_CAUSES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CAUSES_ERROR,
      });
    }
  };

export const getNextCauses =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          causesRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          causesRef,
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
        type: GET_CAUSES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CAUSES_ERROR,
      });
    }
  };
export const getPreviousCauses =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          causesRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          causesRef,
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
        type: GET_CAUSES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CAUSES_ERROR,
      });
    }
  };

export const addCause = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(causesRef, data);
    dispatch({
      type: ADD_CAUSE,
    });
    dispatch(setAlert("Cause added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CAUSES_ERROR,
    });
  }
};

export const getCause = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_CAUSE,
    });
    const docRef = doc(db, "causes", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_CAUSE,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CAUSES_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CAUSES_ERROR,
    });
  }
};
export const getCauseBySlug = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_CAUSE,
    });
    let searchQuery = null;
    searchQuery = query(causesRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(searchQuery);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    if (data.length > 0) {
      dispatch({
        type: GET_CAUSE,
        payload: data[0],
      });
    } else {
      dispatch({
        type: GET_CAUSE,
        payload: null,
      });
      dispatch({
        type: CAUSES_ERROR,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CAUSES_ERROR,
    });
  }
};
export const editCause = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "causes", id), data);
    dispatch(setAlert("Cause updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CAUSES_ERROR,
    });
  }
};

export const deleteCause = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "causes", id));
    dispatch(setAlert("Cause deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CAUSES_ERROR,
    });
  }
};
