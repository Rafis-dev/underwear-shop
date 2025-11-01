import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';
import { Root } from './Root';
import { MainPage } from '../components/MainPage/MainPage';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="catalog/:gender/:category?" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
