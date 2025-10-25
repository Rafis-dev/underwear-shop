import { combineReducers } from '@reduxjs/toolkit';
import navReducer from './features/navigationSlice';

export const rootReducer = combineReducers({
  navigation: navReducer,
});
