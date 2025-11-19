import { useDispatch, useSelector } from 'react-redux';
import { Cart } from './Cart/Cart';
import { Order } from './Order/Order';
import { useEffect, useState } from 'react';
import { fetchAll } from '../../features/goodsSlice';
import { OrderModal } from './OrderModal/OrderModal';

export const CartPage = () => {
  const { cartItems, countItems, orderStatus } = useSelector(
    state => state.cart
  );
  const { goodsList } = useSelector(state => state.goods);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({ list: cartItems.map(item => item.id) }));
      setCount(countItems);
    }
  }, [count, countItems, dispatch, cartItems]);

  return (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      {goodsList.length ? <Order cartItems={cartItems} /> : ''}
      {orderStatus === 'success' && <OrderModal />}
    </>
  );
};
