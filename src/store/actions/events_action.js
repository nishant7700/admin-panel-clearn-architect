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
  GET_EVENTS,
  ADD_EVENT,
  GET_EVENT,
  RESET_EVENT,
  EVENTS_ERROR,
} from "../types/event_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET EVENTS
const eventsRef = collection(db, "events");
export const getEvents =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(eventsRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          eventsRef,
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
        type: GET_EVENTS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: EVENTS_ERROR,
      });
    }
  };

export const getNextEvents =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          eventsRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          eventsRef,
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
        type: GET_EVENTS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: EVENTS_ERROR,
      });
    }
  };
export const getPreviousEvents =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          eventsRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          eventsRef,
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
        type: GET_EVENTS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: EVENTS_ERROR,
      });
    }
  };

export const addEvent = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(eventsRef, data);
    dispatch({
      type: ADD_EVENT,
    });
    dispatch(setAlert("Event added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: EVENTS_ERROR,
    });
  }
};

export const getEventBySlug = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_EVENT,
    });
    let searchQuery = null;
    searchQuery = query(eventsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(searchQuery);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    if (data.length > 0) {
      dispatch({
        type: GET_EVENT,
        payload: data[0],
      });
    } else {
      dispatch({
        type: GET_EVENT,
        payload: null,
      });
      dispatch({
        type: EVENTS_ERROR,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: EVENTS_ERROR,
    });
  }
};
export const getEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_EVENT,
    });
    const docRef = doc(db, "events", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_EVENT,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: EVENTS_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: EVENTS_ERROR,
    });
  }
};
export const editEvent = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "events", id), data);
    dispatch(setAlert("Event updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: EVENTS_ERROR,
    });
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "events", id));
    dispatch(setAlert("Event deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: EVENTS_ERROR,
    });
  }
};
