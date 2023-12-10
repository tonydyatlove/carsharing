import { combineReducers } from 'redux';

import { orderReducer } from './order/reducers';
import { dataReducer } from './data/reducers';

const rootReducer = combineReducers({
  order: orderReducer,
  data: dataReducer,
});

export default rootReducer;
