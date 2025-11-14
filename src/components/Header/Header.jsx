import { Nav } from './Nav/Nav';
import { Top } from './Top/Top';
import style from './Header.module.scss';
import { Search } from '../Search/Search';

export const Header = () => {
  return (
    <header className={style.header}>
      <Top />
      <Search />
      <Nav />
    </header>
  );
};
