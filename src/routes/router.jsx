import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';
import { Root } from './Root';
import { MainPage } from '../Pages/MainPage/MainPage';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';
import { ProductPage } from '../Pages/ProductPage/ProductPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="catalog/:gender/:category?" element={<MainPage />} />
      <Route path="product/:id/" element={<ProductPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
