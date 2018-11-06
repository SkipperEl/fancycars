import { call, put } from "redux-saga/effects";

import * as carApi from '../api/cars';
import actionTypes from '../actionTypes';

export function* carsFetch(action) {
  const cars = yield call(carApi.fetchCars);

  yield put({
    type: actionTypes.carListChanged,
    cars,
  });
}

export function* carAvailabilityFetch(action) {
  const availability = yield call(carApi.fetchCarAvailability, action.id);

  yield put({
    type: actionTypes.carAvailabilityChanged,
    id: action.id,
    availability,
  });
}