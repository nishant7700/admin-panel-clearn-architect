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
  GET_PROJECTS,
  ADD_PROJECT,
  GET_PROJECT,
  RESET_PROJECT,
  PROJECTS_ERROR,
} from "../types/project_type";

import { setAlert } from "./alert";
import { LIMIT } from "../../domain/constant";
//GET PROJECTS
const projectsRef = collection(db, "projects");
export const getProjects =
  ({ term, termField, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(projectsRef, where(termField, "==", term));
      } else {
        searchQuery = query(
          projectsRef,
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
        type: GET_PROJECTS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: PROJECTS_ERROR,
      });
    }
  };

export const getNextProjects =
  ({ term, termField, last, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          projectsRef,
          orderBy(orderValue, orderType),
          startAfter(last[orderValue]),
          limit(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          projectsRef,
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
        type: GET_PROJECTS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: PROJECTS_ERROR,
      });
    }
  };
export const getPreviousProjects =
  ({ term, termField, first, orderValue = "createdAt", orderType = "desc" }) =>
  async (dispatch) => {
    try {
      let searchQuery = null;
      if (term) {
        searchQuery = query(
          projectsRef,
          orderBy(orderValue, orderType),
          endBefore(first[orderValue]),
          limitToLast(LIMIT),
          where(termField, "==", term)
        );
      } else {
        searchQuery = query(
          projectsRef,
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
        type: GET_PROJECTS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: PROJECTS_ERROR,
      });
    }
  };

export const addProject = (data) => async (dispatch) => {
  try {
    data.createdAt = Timestamp.fromDate(new Date());
    const docRef = await addDoc(projectsRef, data);
    dispatch({
      type: ADD_PROJECT,
    });
    dispatch(setAlert("Project added successfully", "success"));
  } catch (e) {
    console.error("Error adding document: ", e);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: PROJECTS_ERROR,
    });
  }
};

export const getProjectBySlug = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PROJECT,
    });
    let searchQuery = null;
    searchQuery = query(projectsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(searchQuery);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    if (data.length > 0) {
      dispatch({
        type: GET_PROJECT,
        payload: data[0],
      });
    } else {
      dispatch({
        type: GET_PROJECT,
        payload: null,
      });
      dispatch({
        type: PROJECTS_ERROR,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: PROJECTS_ERROR,
    });
  }
};
export const getProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PROJECT,
    });
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.id = id;
      dispatch({
        type: GET_PROJECT,
        payload: data,
      });
    } else {
      dispatch(setAlert("Something went wrong", "danger"));
      dispatch({
        type: PROJECTS_ERROR,
      });
    }
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: PROJECTS_ERROR,
    });
  }
};
export const editProject = (id, data) => async (dispatch) => {
  try {
    const docSnap = await updateDoc(doc(db, "projects", id), data);
    dispatch(setAlert("Project updated successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: PROJECTS_ERROR,
    });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    const docSnap = await deleteDoc(doc(db, "projects", id));
    dispatch(setAlert("Project deleted successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger"));
    dispatch({
      type: PROJECTS_ERROR,
    });
  }
};
