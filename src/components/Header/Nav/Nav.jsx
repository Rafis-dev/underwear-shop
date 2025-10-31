import { Container } from '../../Layout/Container/Container';
import { Category } from './Category/Category';
import { Gender } from './Gender/Gender';
// import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router';
// import { setActiveGender } from '../../../features/navigationSlice';
// import { useEffect } from 'react';

export const Nav = () => {
  // const dispatch = useDispatch();
  // const location = useLocation();
  // const gender = location.pathname.split('/')[2] || 'women';

  // useEffect(() => {
  //   dispatch(setActiveGender(gender));
  // }, [dispatch, gender]);

  return (
    <nav>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  );
};
