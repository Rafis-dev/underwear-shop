import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGender, fetchCategory } from '../../features/goodsSlice';
import { setActiveGender } from '../../features/navigationSlice';
import { Goods } from '../Goods/Goods';
import { Banner } from '../Banner/Banner';

export const MainPage = () => {
  const { gender = 'women', category } = useParams();
  const dispatch = useDispatch();

  const { activeGender, categories } = useSelector(state => state.navigation);
  const genderData = categories[activeGender];

  const categoryData = genderData?.list.find(item => item.slug === category);

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
    <>
      {!category && <Banner data={genderData?.banner} />}
      <Goods categoryData={categoryData} />
    </>
  );
};
