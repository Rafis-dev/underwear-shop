import { NavLink } from 'react-router';
import { Container } from '../Layout/Container/Container';
import style from './Banner.module.scss';
import { API_URL } from '../../const';
import { useMedia } from 'react-use';
import { useEffect, useState } from 'react';

export const Banner = ({ data }) => {
  const [bg, setBg] = useState('');
  const isMobile = useMedia('(max-width: 540px)');
  const isTablet = useMedia('(max-width: 768px)');
  const isLaptop = useMedia('(max-width: 1024px)');

  useEffect(() => {
    if (isMobile) {
      setBg(`${API_URL}/${data?.bg.mobile}`);
      console.log('мобила');
    } else if (isTablet) {
      setBg(`${API_URL}/${data?.bg.tablet}`);
      console.log('планшет');
    } else if (isLaptop) {
      setBg(`${API_URL}/${data?.bg.laptop}`);
      console.log('ноут');
    } else {
      setBg(`${API_URL}/${data?.bg.desktop}`);
      console.log('пк');
    }
  }, [isMobile, isTablet, isLaptop, data]);

  return (
    <>
      {data && (
        <section
          className={style.banner}
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <Container>
            <div className={style.content}>
              <h2 className={style.title}>{data.description}</h2>
              <NavLink to={`/product/${data.id}`} className={style.link}>
                Перейти
              </NavLink>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};
