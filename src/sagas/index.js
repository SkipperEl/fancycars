import { takeEvery, takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";

import actionTypes from '../actionTypes';
import { carsFetch, carAvailabilityFetch } from './cars';

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, actionTypes.carListFetch, carsFetch),
    fork(takeEvery, actionTypes.carAvailabilityFetch, carAvailabilityFetch),
  ];
}
