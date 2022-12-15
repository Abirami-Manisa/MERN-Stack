import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_BY_SEARCH,
} from "../constants/actionTypes";

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        numberofPages: action.payload.numberofPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, data: action.payload };

    case CREATE:
      return { ...state, data: [...state.data, action.payload] };
    case UPDATE:
      return {
        ...state,
        data: state.data.map((data) =>
          data._id === action.payload._id ? action.payload : data
        ),
      };
    case DELETE:
      return {
        ...state,
        data: state.data.filter((data) => data._id !== action.payload),
      };
    default:
      return state;
  }
};
