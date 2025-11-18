import style from './Search.module.scss';
import { Container } from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toggleSearch } from '../../features/searchSlice';

export const Search = () => {
  const { openSearch } = useSelector(state => state.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    search: '',
  };

  const validationSchema = yup.object({
    search: yup.string().required('Поле обязательно дял заполнения'),
  });

  const handleSubmit = ({ search }, { resetForm }) => {
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      resetForm();
      dispatch(toggleSearch());
    }
  };

  return (
    openSearch && (
      <div className={style.search}>
        <Container>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={style.form}>
              <Field
                className={style.input}
                type="search"
                name="search"
                placeholder="Найти..."
              />
              <ErrorMessage
                name="search"
                component={'p'}
                className={style.error}
              />
              <button className={style.btn} type="submit">
                Искать
              </button>
            </Form>
          </Formik>
        </Container>
      </div>
    )
  );
};
