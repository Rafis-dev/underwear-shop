import { Outlet, ScrollRestoration } from 'react-router';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Layout/Main/Main';

export const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
