import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import cars from './cars';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  // your reducer here
  cars,
});
