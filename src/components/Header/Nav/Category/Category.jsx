import { NavLink, useLocation } from 'react-router';
import style from './Category.module.scss';
import cn from 'classnames';

const list = [
  {
    link: 'women',
    title: 'Женщины',
    categories: [
      { link: 'bra', title: 'Бюстгальтеры' },
      { link: 'panties', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'robes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
      { link: 'pajamas', title: 'Пижамы' },
    ],
  },

  {
    link: 'men',
    title: 'Мужчины',
    categories: [
      { link: 'underpants', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'robes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
    ],
  },
];

export const Category = () => {
  const location = useLocation();

  const gender = location.pathname.includes('/women')
    ? 'women'
    : location.pathname.includes('/men')
    ? 'men'
    : null;

  const genderCategories = list.filter(item => item.link === gender)[0];

  return (
    <ul className={style.category}>
      {genderCategories.categories.map(item => (
        <li key={item.link}>
          <NavLink
            className={({ isActive }) =>
              cn(style.link, isActive && style.linkActive)
            }
            to={`/${gender}/${item.link}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
