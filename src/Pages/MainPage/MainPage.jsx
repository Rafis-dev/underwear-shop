import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGender, fetchCategory } from '../../features/goodsSlice';
import { setActiveGender } from '../../features/navigationSlice';
import { Goods } from '../../components/Goods/Goods';
import { Banner } from '../../components/Banner/Banner';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';

export const MainPage = () => {
  const { gender = 'women', category } = useParams();
  const dispatch = useDispatch();
  const page = usePageFromSearchParams(dispatch);

  const { activeGender, categories } = useSelector(state => state.navigation);
  const genderData = categories[activeGender];

  const categoryData = genderData?.list.find(item => item.slug === category);

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  useEffect(() => {
    if (gender && category) {
      const params = { gender, category };
      if (page) {
        params.page = page;
      }
      dispatch(fetchCategory(params));
      return;
    }
    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, dispatch, category, page]);

  return (
    <>
      {!category && <Banner data={genderData?.banner} />}
      <Goods title={categoryData?.title} />
    </>
  );
};
