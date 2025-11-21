import { useSelector } from 'react-redux';
import style from './Goods.module.scss';
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product';
import { Pagination } from '../Pagination/Pagination';
import { Preloader } from '../Preloader/Preloader';

export const Goods = ({ title, recommendation = false }) => {
  const { goodsList, totalCount, status } = useSelector(state => state.goods);

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={style.title}>
          {title ?? 'Новинки'}
          {totalCount && totalCount > 0 && !recommendation ? (
            <sup>&nbsp;{totalCount}</sup>
          ) : (
            ''
          )}
        </h2>
        {status === 'loading' ? (
          <Preloader />
        ) : (
          <>
            <ul className={style.list}>
              {goodsList.map(item => (
                <li key={item.id}>
                  <Product {...item} />
                </li>
              ))}
            </ul>
            <Pagination />
          </>
        )}
      </Container>
    </section>
  );
};
