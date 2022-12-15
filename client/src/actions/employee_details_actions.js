import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  FETCH_BY_SEARCH,
  DELETE,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getData = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchData(page);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createData = (details) => async (dispatch) => {
  try {
    const { data } = await api.createData(details);

    dispatch({ type: CREATE, payload: data });
    alert("Employee data created successfully!!!");
  } catch (error) {
    console.log(error);
  }
};

export const updateData = (id, details) => async (dispatch) => {
  try {
    const { data } = await api.updateData(id, details);

    dispatch({ type: UPDATE, payload: data });
    alert("Employee data updated successfully!!!");
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = (id) => async (dispatch) => {
  try {
    await await api.deleteData(id);

    dispatch({ type: DELETE, payload: id });
    alert("Employee data deleted successfully!!!");
  } catch (error) {
    console.log(error);
  }
};

export const getDataBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchDataBySearch(searchQuery);
    console.log(data);

    dispatch({ type: FETCH_BY_SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};
