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
  GET_VOLUNTEERS,
  ADD_VOLUNTEER,
  GET_VOLUNTEER,
  RESET_VOLUNTEER,
  VOLUNTEERS_ERROR,
} from "../types/volunteer_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET VOLUNTEERS
const volunteersRef = collection(db, "volunteers");
export const getVolunteers =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(volunteersRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          volunteersRef,
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
        type: GET_VOLUNTEERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: VOLUNTEERS_ERROR,
      });
    }
  };

export const getNextVolunteers =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          volunteersRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          volunteersRef,
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
        type: GET_VOLUNTEERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: VOLUNTEERS_ERROR,
      });
    }
  };
export const getPreviousVolunteers =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          volunteersRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          volunteersRef,
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
        type: GET_VOLUNTEERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: VOLUNTEERS_ERROR,
      });
    }
  };

export const addVolunteer = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(volunteersRef, data);
    dispatch({
      type: ADD_VOLUNTEER,
    });
    dispatch(setAlert("Volunteer added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: VOLUNTEERS_ERROR,
    });
  }
};

export const getVolunteer = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_VOLUNTEER,
    });
    const docRef = doc(db, "volunteers", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_VOLUNTEER,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: VOLUNTEERS_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: VOLUNTEERS_ERROR,
    });
  }
};
export const editVolunteer = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "volunteers", id), data);
    dispatch(setAlert("Volunteer updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: VOLUNTEERS_ERROR,
    });
  }
};

export const deleteVolunteer = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "volunteers", id));
    dispatch(setAlert("Volunteer deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: VOLUNTEERS_ERROR,
    });
  }
};
