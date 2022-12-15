import { combineReducers } from "redux";

import data from "./employee_details";
import auth from "./authentication";

export const reducers = combineReducers({ data, auth });
