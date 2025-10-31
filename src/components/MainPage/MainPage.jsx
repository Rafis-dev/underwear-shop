import { useParams } from 'react-router';
import { Container } from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGender, fetchCategory } from '../../features/goodsSlice';
import style from './MainPage.module.scss';
import { Product } from '../Product/Product';
import { setActiveGender } from '../../features/navigationSlice';

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const { goodsList } = useSelector(state => state.goods);

  const { activeGender, categories } = useSelector(state => state.navigation);

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }
    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, dispatch, category]);

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={style.title}>Новинки</h2>
        <ul className={style.list}>
          {goodsList.map(item => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
