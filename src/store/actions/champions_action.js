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
  GET_CHAMPIONS,
  ADD_CHAMPION,
  GET_CHAMPION,
  RESET_CHAMPION,
  CHAMPIONS_ERROR,
} from "../types/champion_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET CHAMPIONS
const championsRef = collection(db, "champions");
export const getChampions =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(championsRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          championsRef,
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
        type: GET_CHAMPIONS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CHAMPIONS_ERROR,
      });
    }
  };

export const getNextChampions =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          championsRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          championsRef,
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
        type: GET_CHAMPIONS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CHAMPIONS_ERROR,
      });
    }
  };
export const getPreviousChampions =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          championsRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          championsRef,
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
        type: GET_CHAMPIONS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CHAMPIONS_ERROR,
      });
    }
  };

export const addChampion = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(championsRef, data);
    dispatch({
      type: ADD_CHAMPION,
    });
    dispatch(setAlert("Champion added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CHAMPIONS_ERROR,
    });
  }
};

export const getChampionBySlug = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_CHAMPION,
    });
    let searchQuery = null;
    searchQuery = query(championsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(searchQuery);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    if (data.length > 0) {
      dispatch({
        type: GET_CHAMPION,
        payload: data[0],
      });
    } else {
      dispatch({
        type: GET_CHAMPION,
        payload: null,
      });
      dispatch({
        type: CHAMPIONS_ERROR,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CHAMPIONS_ERROR,
    });
  }
};
export const getChampion = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_CHAMPION,
    });
    const docRef = doc(db, "champions", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_CHAMPION,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: CHAMPIONS_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CHAMPIONS_ERROR,
    });
  }
};
export const editChampion = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "champions", id), data);
    dispatch(setAlert("Champion updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CHAMPIONS_ERROR,
    });
  }
};

export const deleteChampion = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "champions", id));
    dispatch(setAlert("Champion deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: CHAMPIONS_ERROR,
    });
  }
};
