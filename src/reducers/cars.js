import actionTypes from '../actionTypes';
import { carAvailabilityStates } from '../api/carEnums';

const initialState = {
  carsByName: [],
  carsByAvailability: [],
};

const carAvailabilityStateOrdering = {};
carAvailabilityStateOrdering[carAvailabilityStates.inDealership] = 0;
carAvailabilityStateOrdering[carAvailabilityStates.outOfStock] = 1;
carAvailabilityStateOrdering[carAvailabilityStates.unavailable] = 2;
carAvailabilityStateOrdering['unknown'] = 3;

const nameComparator = (a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

const availabilityComparator = (a, b) => {
  const availA = a.availability || 'unknown';
  const availB = b.availability || 'unknown';

  if (availA < availB) {
    return -1;
  }
  if (availA > availB) {
    return 1;
  }

  return nameComparator(a, b);
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.carListChanged: {
      const carsByName = JSON.parse(JSON.stringify(action.cars)).sort(nameComparator);
      return {
        ...state,
        carsByName,
        carsByAvailability: [],
      };
    }

    case actionTypes.carAvailabilityChanged: {
      const newCarsByName = JSON.parse(JSON.stringify(state.carsByName));
      const index = newCarsByName.findIndex(e => e.id === action.id);
      newCarsByName[index].availability = action.availability;

      const newCarsByAvailability = JSON.parse(JSON.stringify(newCarsByName)).sort(availabilityComparator);

      return {
        ...state,
        carsByName: newCarsByName,
        carsByAvailability: newCarsByAvailability,
      };
    }

    default:
      return state;
  }
};

const getCarsByName = state =>
  state.carsByName;

const getCarsByAvailability = state =>
  state.carsByAvailability;

export const withState = state => ({
  getCarsByName: () => getCarsByName(state),
  getCarsByAvailability: () => getCarsByAvailability(state),
});
