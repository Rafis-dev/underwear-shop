import { Nav } from './Nav/Nav';
import { Top } from './Top/Top';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <Top />
      <Nav />
    </header>
  );
};
