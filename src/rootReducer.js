import { combineReducers } from '@reduxjs/toolkit';
import navReducer from './features/navigationSlice';
import colorReducer from './features/colorSlice';

export const rootReducer = combineReducers({
  navigation: navReducer,
  color: colorReducer,
});
