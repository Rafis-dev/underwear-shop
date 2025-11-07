import { useDispatch, useSelector } from 'react-redux';
import { Goods } from '../../components/Goods/Goods';
import { useEffect } from 'react';
import { fetchCategory } from '../../features/goodsSlice';

export const FavoritePage = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    dispatch(fetchCategory({ list: favorites }));
  }, [dispatch, favorites]);

  return <Goods title="Избранное" />;
};
