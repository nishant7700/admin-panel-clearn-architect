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
  GET_COMPANIES,
  ADD_COMPANIE,
  GET_COMPANIE,
  RESET_COMPANIE,
  COMPANIES_ERROR,
} from "../types/companie_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET COMPANIES
const companiesRef = collection(db, "companies");
export const getCompanies =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(companiesRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          companiesRef,
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
        type: GET_COMPANIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: COMPANIES_ERROR,
      });
    }
  };

export const getNextCompanies =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          companiesRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          companiesRef,
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
        type: GET_COMPANIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: COMPANIES_ERROR,
      });
    }
  };
export const getPreviousCompanies =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          companiesRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          companiesRef,
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
        type: GET_COMPANIES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: COMPANIES_ERROR,
      });
    }
  };

export const addCompanie = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(companiesRef, data);
    dispatch({
      type: ADD_COMPANIE,
    });
    dispatch(setAlert("Companie added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: COMPANIES_ERROR,
    });
  }
};

export const getCompanie = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_COMPANIE,
    });
    const docRef = doc(db, "companies", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_COMPANIE,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: COMPANIES_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: COMPANIES_ERROR,
    });
  }
};
export const editCompanie = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "companies", id), data);
    dispatch(setAlert("Companie updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: COMPANIES_ERROR,
    });
  }
};

export const deleteCompanie = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "companies", id));
    dispatch(setAlert("Companie deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: COMPANIES_ERROR,
    });
  }
};
