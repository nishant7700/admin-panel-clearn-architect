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
  GET_CALAMITIES,
  ADD_CALAMITIE,
  GET_CALAMITIE,
  RESET_CALAMITIE,
  CALAMITIES_ERROR,
} from "../types/calamitie_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET CALAMITIES
const calamitiesRef = collection(db, "calamities");
export const getCalamities =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(calamitiesRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          calamitiesRef,
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
        type: GET_CALAMITIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CALAMITIES_ERROR,
      });
    }
  };

export const getNextCalamities =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          calamitiesRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          calamitiesRef,
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
        type: GET_CALAMITIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CALAMITIES_ERROR,
      });
    }
  };
export const getPreviousCalamities =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          calamitiesRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          calamitiesRef,
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
        type: GET_CALAMITIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CALAMITIES_ERROR,
      });
    }
  };

export const addCalamitie = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(calamitiesRef, data);
    dispatch({
      type: ADD_CALAMITIE,
    });
    dispatch(setAlert("Calamitie added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CALAMITIES_ERROR,
    });
  }
};

export const getCalamitieBySlug = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_CALAMITIE,
    });
    let searchQuery = null;
    searchQuery = query(calamitiesRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(searchQuery);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    if (data.length > 0) {
      dispatch({
        type: GET_CALAMITIE,
        payload: data[0],
      });
    } else {
      dispatch({
        type: GET_CALAMITIE,
        payload: null,
      });
      dispatch({
        type: CALAMITIES_ERROR,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CALAMITIES_ERROR,
    });
  }
};
export const getCalamitie = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_CALAMITIE,
    });
    const docRef = doc(db, "calamities", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_CALAMITIE,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CALAMITIES_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CALAMITIES_ERROR,
    });
  }
};
export const editCalamitie = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "calamities", id), data);
    dispatch(setAlert("Calamitie updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CALAMITIES_ERROR,
    });
  }
};

export const deleteCalamitie = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "calamities", id));
    dispatch(setAlert("Calamitie deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CALAMITIES_ERROR,
    });
  }
};
