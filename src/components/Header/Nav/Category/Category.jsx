import { NavLink } from 'react-router';
import style from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

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
  const gender = useSelector(state => state.navigation.activeGender);
  const genderCategories = list.find(item => item.link === gender);

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
