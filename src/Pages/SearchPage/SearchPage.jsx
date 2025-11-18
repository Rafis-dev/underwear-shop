import { useDispatch, useSelector } from 'react-redux';
import style from './SearchPage.module.scss';
import { Goods } from '../../components/Goods/Goods';
import { useSearchParams } from 'react-router';
import { useEffect } from 'react';
import { fetchAll } from '../../features/goodsSlice';

export const SearchPage = () => {
  const { goodsList } = useSelector(state => state.goods);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('q');
    const params = { search };

    dispatch(fetchAll(params));
  }, [searchParams, dispatch]);

  return goodsList.length ? (
    <Goods title="Результаты поиска" />
  ) : (
    <h3 className={style.empty}>
      По запросу "{searchParams.get('q')}" ничего не найдено
    </h3>
  );
};
