import style from './Order.module.scss';
import { Container } from '../../../components/Layout/Container/Container';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { PatternFormat } from 'react-number-format';
import * as yup from 'yup';

export const Order = ({ cartItems }) => {
  const handleSubmit = values => {
    console.log(cartItems, values);
  };

  const validationSchema = yup.object({
    fio: yup.string().required('Заполните ФИО'),
    address: yup
      .string()
      .test('deliveryTest', 'Введите адрес доставки', function (value) {
        return this.parent.delivery === 'delivery' ? !!value : true;
      }),
    phone: yup
      .string()
      .required('Введите номер телефона')
      .matches(/^\+\d{1}\(\d{3}\)-\d{3}-\d{4}$/, 'Некорректный номер телефона'),
    email: yup
      .string()
      .email('Некорректный формат email')
      .required('Заполните email'),
    delivery: yup.string().required('Выберите способ доставки'),
  });

  return (
    <section>
      <Container>
        <h2 className={style.title}>Оформление заказа</h2>

        <Formik
          initialValues={{
            fio: '',
            address: '',
            phone: '',
            email: '',
            delivery: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={style.form}>
            <fieldset className={style.personal}>
              <label className={style.label}>
                <Field
                  className={style.input}
                  type="text"
                  placeholder="ФИО*"
                  name="fio"
                />
                <ErrorMessage
                  className={style.error}
                  name="fio"
                  component={'span'}
                />
              </label>

              <label className={style.label}>
                <Field
                  className={style.input}
                  type="text"
                  placeholder="Адрес доставки"
                  name="address"
                />
                <ErrorMessage
                  className={style.error}
                  name="address"
                  component={'span'}
                />
              </label>

              <label className={style.label}>
                <Field
                  as={PatternFormat}
                  className={style.input}
                  format="+7(###)-###-####"
                  mask="_"
                  placeholder="Телефон*"
                  name="phone"
                />
                <ErrorMessage
                  className={style.error}
                  name="phone"
                  component={'span'}
                />
              </label>

              <label className={style.label}>
                <Field
                  className={style.input}
                  type="email"
                  placeholder="Email*"
                  name="email"
                />
                <ErrorMessage
                  className={style.error}
                  name="email"
                  component={'span'}
                />
              </label>
            </fieldset>

            <fieldset className={style.radioList}>
              <label className={style.radio}>
                <Field
                  className={style.radioInput}
                  type="radio"
                  name="delivery"
                  value="delivery"
                />
                <span>Доставка</span>
              </label>
              <label className={style.radio}>
                <Field
                  className={style.radioInput}
                  type="radio"
                  name="delivery"
                  value="self"
                />
                <span>Самовывоз</span>
              </label>
              <ErrorMessage
                className={style.error}
                name="delivery"
                component={'span'}
              />
            </fieldset>

            <button className={style.submit} type="submit">
              Оформить
            </button>
          </Form>
        </Formik>
      </Container>
    </section>
  );
};
