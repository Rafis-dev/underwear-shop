import { combineReducers } from '@reduxjs/toolkit';
import navReducer from './features/navigationSlice';
import colorReducer from './features/colorSlice';
import goodsReducer from './features/goodsSlice';
import productReducer from './features/productSlice';
import favoritesReducer from './features/favoritesSlice';
import cartReducer from './features/cartSlice';
import searchReducer from './features/searchSlice';

export const rootReducer = combineReducers({
  navigation: navReducer,
  color: colorReducer,
  goods: goodsReducer,
  product: productReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
  search: searchReducer,
});
