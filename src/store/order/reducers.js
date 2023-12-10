import {
  CHANGE_CITY_DATA,
  CHANGE_POINT_DATA,
  CHANGE_CATEGORY_DATA,
  CHANGE_CAR_DATA,
  CHANGE_COLOR,
  CHANGE_RESERVATION_FROM,
  CHANGE_RESERVATION_TO,
  CHANGE_RATE,
  CHANGE_IS_FULL,
  CHANGE_HAS_BABY_SEAT,
  CHANGE_IS_RIGHT_HAND,
} from './actions';

const extrasDefaultState = {
  color: null,
  reservationTime: {
    from: null,
    to: null,
  },
  rate: null,
  service: {
    isFullTank: false,
    hasBabySeat: false,
    isRightHand: false,
  },
};

/**
 * carData example object for debugging
 */

// {
//   updatedAt: 1624278517256,
//   createdAt: 1601326749562,
//   name: 'Lamborgini, Gallardo',
//   description: 'Тестовый тест',
//   number: 'o000oo',
//   priceMax: 100000,
//   priceMin: 9000,
//   categoryId: {
//     name: 'Спорт',
//     description: 'Турбо моторы и масло на доливку в багажнике',
//     id: '5fd91add935d4e0be16a3c4b',
//   },
//   thumbnail: {
//     size: 250513,
//     originalname: 'Без названия (1).png',
//     mimetype: 'image/png',
//     path: '/files/5fe5ef22935d4e0be16a408f_Без_названия__1_.png',
//   },
//   tank: 23,
//   colors: ['Красная', 'Зеленная', 'Фиолетовый'],
//   id: '5f724e9db710ec1273839d0e',
// }

const defaultState = {
  cityData: null,
  pointData: null,
  categoryData: null,
  carData: null,
  extras: extrasDefaultState,
};

export const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CITY_DATA:
      return {
        ...state,
        cityData: action.payload,
        pointData: null,
        carData: null,
        extras: extrasDefaultState,
      };
    case CHANGE_POINT_DATA:
      return {
        ...state,
        pointData: action.payload,
        carData: null,
        extras: extrasDefaultState,
      };
    case CHANGE_CATEGORY_DATA:
      return {
        ...state,
        categoryData: action.payload,
        carData: null,
        extras: extrasDefaultState,
      };
    case CHANGE_CAR_DATA:
      return {
        ...state,
        carData: action.payload,
        extras: extrasDefaultState,
      };
    case CHANGE_COLOR:
      return {
        ...state,
        extras: {
          ...state.extras,
          color: action.payload,
        },
      };
    case CHANGE_RESERVATION_FROM:
      return {
        ...state,
        extras: {
          ...state.extras,
          reservationTime: {
            ...state.extras.reservationTime,
            from: action.payload,
          },
        },
      };
    case CHANGE_RESERVATION_TO:
      return {
        ...state,
        extras: {
          ...state.extras,
          reservationTime: {
            ...state.extras.reservationTime,
            to: action.payload,
          },
        },
      };
    case CHANGE_RATE:
      return {
        ...state,
        extras: {
          ...state.extras,
          rate: action.payload,
        },
      };
    case CHANGE_IS_FULL:
      return {
        ...state,
        extras: {
          ...state.extras,
          service: {
            ...state.extras.service,
            isFullTank: action.payload,
          },
        },
      };
    case CHANGE_HAS_BABY_SEAT:
      return {
        ...state,
        extras: {
          ...state.extras,
          service: {
            ...state.extras.service,
            hasBabySeat: action.payload,
          },
        },
      };
    case CHANGE_IS_RIGHT_HAND:
      return {
        ...state,
        extras: {
          ...state.extras,
          service: {
            ...state.extras.service,
            isRightHand: action.payload,
          },
        },
      };
    default:
  }
  return state;
};
