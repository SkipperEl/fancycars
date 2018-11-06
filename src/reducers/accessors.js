import * as fromCars from './cars';

export const carsWithState = state => fromCars.withState(state.cars);
