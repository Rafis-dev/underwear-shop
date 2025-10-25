import { RouterProvider } from 'react-router';
import { router } from './routes/router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNavigation } from './features/navigationSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};
