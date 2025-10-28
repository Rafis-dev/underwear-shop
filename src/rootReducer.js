import { combineReducers } from '@reduxjs/toolkit';
import navReducer from './features/navigationSlice';
import colorReducer from './features/colorSlice';
import goodsReducer from './features/goodsSlice';

export const rootReducer = combineReducers({
  navigation: navReducer,
  color: colorReducer,
  goods: goodsReducer,
});
