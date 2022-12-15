import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router("/employee-list");
  } catch (error) {
    alert("ERROR: Please check the details provided are correct!");
    console.log(error);
  }
};

export const signUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router("/employee-list");
  } catch (error) {
    alert("ERROR: Please check the details provided are correct!");
    console.log(error);
  }
};
