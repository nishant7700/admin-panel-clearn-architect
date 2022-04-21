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
  GET_STORIES,
  ADD_STORIE,
  GET_STORIE,
  RESET_STORIE,
  STORIES_ERROR,
} from "../types/storie_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET STORIES
const storiesRef = collection(db, "stories");
export const getStories =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(storiesRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          storiesRef,
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
        type: GET_STORIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: STORIES_ERROR,
      });
    }
  };

export const getNextStories =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          storiesRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          storiesRef,
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
        type: GET_STORIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: STORIES_ERROR,
      });
    }
  };
export const getPreviousStories =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          storiesRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          storiesRef,
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
        type: GET_STORIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: STORIES_ERROR,
      });
    }
  };

export const addStorie = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(storiesRef, data);
    dispatch({
      type: ADD_STORIE,
    });
    dispatch(setAlert("Storie added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: STORIES_ERROR,
    });
  }
};

export const getStorieBySlug = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_STORIE,
    });
    let searchQuery = null;
    searchQuery = query(storiesRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(searchQuery);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    if (data.length > 0) {
      dispatch({
        type: GET_STORIE,
        payload: data[0],
      });
    } else {
      dispatch({
        type: GET_STORIE,
        payload: null,
      });
      dispatch({
        type: STORIES_ERROR,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: STORIES_ERROR,
    });
  }
};
export const getStorie = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_STORIE,
    });
    const docRef = doc(db, "stories", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_STORIE,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: STORIES_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: STORIES_ERROR,
    });
  }
};
export const editStorie = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "stories", id), data);
    dispatch(setAlert("Storie updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: STORIES_ERROR,
    });
  }
};

export const deleteStorie = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "stories", id));
    dispatch(setAlert("Storie deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: STORIES_ERROR,
    });
  }
};
