import { NavLink, useLocation } from 'react-router';
import style from './Gender.module.scss';
import cn from 'classnames';
const list = [
  { link: 'women', title: 'Женщины' },
  { link: 'men', title: 'Мужчины' },
];

export const Gender = () => {
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';
  return (
    <ul className={style.gender}>
      {list.map(item => {
        return (
          <li key={item.link} className={style.item}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  style.link,
                  (isActive || gender === item.link) && style.linkActive
                )
              }
              to={item.link}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
