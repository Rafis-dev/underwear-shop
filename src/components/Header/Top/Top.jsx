import { Container } from '../../Layout/Container/Container';
import style from './Top.module.scss';
import cn from 'classnames';
import logo from '/src/assets/logo.svg';
import { NavLink } from 'react-router';
import Like from '../../../assets/heart.svg?react';
import CartSVG from '../../../assets/HandbagSimple.svg?react';
import Search from '../../../assets/MagnifyingGlass.svg?react';
import { useSelector } from 'react-redux';

export const Top = () => {
  const { countItems } = useSelector(state => state.cart);

  return (
    <div className={style.top}>
      <Container className={style.container}>
        <a className={cn(style.link, style.phone)} href="tel:89304902620">
          8 930 490 26 20
        </a>

        <NavLink className={style.logo} to="/">
          <img src={logo} alt="логотип inspired" />
        </NavLink>
        <div className={style.navigation}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <button className={style.link}>
                <Search />
              </button>
            </li>
            <li className={style.navItem}>
              <NavLink to="/cart" className={style.link}>
                <CartSVG />
                <span className={style.linkCount}>{countItems}</span>
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink to="/favorite" className={cn(style.link, style.like)}>
                <Like />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
