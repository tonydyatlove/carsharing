export const SET_CITIES = 'SET_CITIES';
export const SET_POINTS = 'SET_POINTS';
export const SET_POINTS_COORDS = 'SET_POINTS_COORDS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_CARS_BY_CATEGORY = 'SET_CARS_BY_CATEGORY';
export const SET_RATES = 'SET_RATES';
export const SET_ORDER_STATUSES = 'SET_ORDER_STATUSES';

export const setCities = (citiesData) => ({
  type: SET_CITIES,
  payload: citiesData,
});

export const setPoints = (pointsData) => ({
  type: SET_POINTS,
  payload: pointsData,
});

export const setPointsCoords = (pointsCoords) => ({
  type: SET_POINTS_COORDS,
  payload: pointsCoords,
});

export const setCategories = (categoriesData) => ({
  type: SET_CATEGORIES,
  payload: categoriesData,
});

export const setCarsByCategory = (carsByCategory) => ({
  type: SET_CARS_BY_CATEGORY,
  payload: carsByCategory,
});

export const setRates = (ratesData) => ({
  type: SET_RATES,
  payload: ratesData,
});

export const setOrderStatuses = (orderStatusesData) => ({
  type: SET_ORDER_STATUSES,
  payload: orderStatusesData,
});
