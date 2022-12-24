import axios from "axios";

const API = axios.create({ baseURL: "https://employee-management-system-api.onrender.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchData = (page) => API.get(`/employee-data?page=${page}`);
export const createData = (newData) => API.post("/employee-data", newData);
export const fetchDataBySearch = (searchQuery) =>
  API.get(`/employee-data/search?searchQuery=${searchQuery || "none"}`);

export const fetchProfileBySearch = (searchQuery) =>
  API.get(`/employee-data/search?searchQuery=${searchQuery || "none"}`);
export const updateData = (id, updatedData) =>
  API.patch(`/employee-data/${id}`, updatedData);
export const deleteData = (id) => API.delete(`/employee-data/${id}`);

export const signIn = (formData) => API.post("/user/signIn", formData);
export const signUp = (formData) => API.post("/user/signUp", formData);
