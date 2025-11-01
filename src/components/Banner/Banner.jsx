import { NavLink } from 'react-router';
import { Container } from '../Layout/Container/Container';
import style from './Banner.module.scss';
import { API_URL } from '../../const';

export const Banner = ({ data }) => {
  return (
    <>
      {data && (
        <section
          className={style.banner}
          style={{
            backgroundImage: `url(${API_URL}/${data.bg.desktop})`,
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
