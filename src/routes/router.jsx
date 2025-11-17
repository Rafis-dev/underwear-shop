import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';
import { Root } from './Root';
import { MainPage } from '../Pages/MainPage/MainPage';
import { ProductPage } from '../Pages/ProductPage/ProductPage';
import { FavoritePage } from '../Pages/FavoritePage/FavoritePage';
import { CartPage } from '../Pages/CartPage/CartPage';
import { ErrorPage } from '../Pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/catalog/:gender/:category?" element={<MainPage />} />
      <Route path="/product/:id/" element={<ProductPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
