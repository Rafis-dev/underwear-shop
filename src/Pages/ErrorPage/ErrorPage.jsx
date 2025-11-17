import { useLocation, useNavigate, useRouteError } from 'react-router';
import style from './ErrorPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchColor } from '../../features/colorSlice';
import { fetchNavigation } from '../../features/navigationSlice';

export const ErrorPage = () => {
  const routeError = useRouteError();
  const { status } = useSelector(state => state.statusServer);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (status && location.pathname === '/404') {
      navigate('/');
    }
  }, [status, navigate, location]);

  useEffect(() => {
    if (!status && location.pathname === '/404') {
      clearInterval(timerIdRef.current);

      timerIdRef.current = setInterval(() => {
        dispatch(fetchColor());
        dispatch(fetchNavigation());
      }, 3000);
    }

    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [status, dispatch, location]);

  return (
    <div className={style.error}>
      <h2 className={style.title}>Произошла ошибка. Вернитесь позже</h2>
      <p className={style.message}>
        {routeError?.message || 'Неизвестная ошибка'}
      </p>
    </div>
  );
};
