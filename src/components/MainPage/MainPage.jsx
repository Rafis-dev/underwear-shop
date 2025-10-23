import { useParams } from 'react-router';
import { Container } from '../Layout/Container/Container';

export const MainPage = ({ gender = 'women' }) => {
  const { category } = useParams();

  return (
    <Container>
      <div>Main page {gender}</div>
      {category && <p>Категория: {category}</p>}
    </Container>
  );
};
