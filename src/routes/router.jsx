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
      {/* <Route path="men" element={<MainPage />} />
      <Route path="kids" element={<MainPage gender="kids" />} />
      <Route path="women/:category" element={<MainPage gender="women" />} />
      <Route path="men/:category" element={<MainPage gender="men" />} />
      <Route path="kids/:category" element={<MainPage gender="kids" />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
