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
  GET_BANNERS,
  ADD_BANNER,
  GET_BANNER,
  RESET_BANNER,
  BANNERS_ERROR,
} from "../types/banner_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET BANNERS
const bannersRef = collection(db, "banners");
export const getBanners =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(bannersRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          bannersRef,
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
        type: GET_BANNERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: BANNERS_ERROR,
      });
    }
  };

export const getNextBanners =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          bannersRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          bannersRef,
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
        type: GET_BANNERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: BANNERS_ERROR,
      });
    }
  };
export const getPreviousBanners =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          bannersRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          bannersRef,
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
        type: GET_BANNERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: BANNERS_ERROR,
      });
    }
  };

export const addBanner = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(bannersRef, data);
    dispatch({
      type: ADD_BANNER,
    });
    dispatch(setAlert("Banner added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: BANNERS_ERROR,
    });
  }
};

export const getBanner = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_BANNER,
    });
    const docRef = doc(db, "banners", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_BANNER,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: BANNERS_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: BANNERS_ERROR,
    });
  }
};
export const editBanner = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "banners", id), data);
    dispatch(setAlert("Banner updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: BANNERS_ERROR,
    });
  }
};

export const deleteBanner = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "banners", id));
    dispatch(setAlert("Banner deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: BANNERS_ERROR,
    });
  }
};
