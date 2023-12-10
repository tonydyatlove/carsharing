import {
  SET_CITIES,
  SET_POINTS,
  SET_POINTS_COORDS,
  SET_CATEGORIES,
  SET_CARS_BY_CATEGORY,
  SET_RATES,
  SET_ORDER_STATUSES,
} from './actions';

const defaultState = {
  citiesData: [],
  pointsData: [],
  pointsCoords: [],
  categoriesData: [],
  carsByCategory: [],
  ratesData: [],
  orderStatusesData: [],
};

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return { ...state, citiesData: action.payload };
    case SET_POINTS:
      return { ...state, pointsData: action.payload };
    case SET_POINTS_COORDS:
      return { ...state, pointsCoords: action.payload };
    case SET_CATEGORIES:
      return { ...state, categoriesData: action.payload };
    case SET_CARS_BY_CATEGORY:
      return { ...state, carsByCategory: action.payload };
    case SET_RATES:
      return { ...state, ratesData: action.payload };
    case SET_ORDER_STATUSES:
      return { ...state, orderStatusesData: action.payload };
    default:
  }

  return state;
};
