import { NavLink } from 'react-router';
import style from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

// const list = [
//   {
//     link: 'women',
//     title: 'Женщины',
//     categories: [
//       { link: 'bra', title: 'Бюстгальтеры' },
//       { link: 'panties', title: 'Трусы' },
//       { link: 'socks', title: 'Носки' },
//       { link: 'robes', title: 'Халаты' },
//       { link: 'thermal', title: 'Термобелье' },
//       { link: 'pajamas', title: 'Пижамы' },
//     ],
//   },

//   {
//     link: 'men',
//     title: 'Мужчины',
//     categories: [
//       { link: 'underpants', title: 'Трусы' },
//       { link: 'socks', title: 'Носки' },
//       { link: 'robes', title: 'Халаты' },
//       { link: 'thermal', title: 'Термобелье' },
//     ],
//   },
// ];

export const Category = () => {
  const { activeGender, categories } = useSelector(state => state.navigation);

  return (
    <ul className={style.category}>
      {categories[activeGender]?.list?.map(item => (
        <li key={item.slug}>
          <NavLink
            className={({ isActive }) =>
              cn(style.link, isActive && style.linkActive)
            }
            to={`/${activeGender}/${item.slug}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
