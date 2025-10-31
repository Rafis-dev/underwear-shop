import { NavLink } from 'react-router';
import style from './Footer.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

export const FooterCategory = () => {
  const { categories, genderList } = useSelector(state => state.navigation);

  return (
    <div className={style.category}>
      <h2 className={cn(style.title, style.categoryTitle)}>Каталог</h2>

      <ul className={style.categoryList}>
        {genderList.map(gender => (
          <li key={gender} className={style.categoryItem}>
            <h3 className={style.categorySubtitle}>
              <NavLink to={`/catalog/${gender}`}>
                {categories[gender].title}
              </NavLink>
            </h3>

            <ul className={style.categorySublist}>
              {categories[gender].list.map(item => (
                <li key={item.slug}>
                  <NavLink
                    className={style.link}
                    to={`/catalog/${gender}/${item.slug}`}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
