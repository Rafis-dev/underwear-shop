import { useRouteError } from 'react-router';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Ошибка 404</h2>
      <p>{error?.message || 'Неизвестная ошибка'}</p>
    </div>
  );
};
