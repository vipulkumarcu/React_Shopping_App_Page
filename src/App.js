import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let initial = true;

function App ()
{
  const dispatch = useDispatch ();

  const showCart = useSelector ( state => state.ui.isCartVisible );
  const notification = useSelector ( state => state.ui.displayNotification );
  const cart = useSelector ( state => state.cart );

  useEffect (
    () => {
      dispatch ( fetchCartData () );
    }, [ dispatch ]
  );

  useEffect (
    () => {
      if ( initial )
      {
        initial = false;
        return;
      }

      dispatch ( sendCartData ( cart ) );
    }, [ cart, dispatch ]
  );

  return (
    <>
      { notification && <Notification status = { notification.status } title = { notification.title } message = { notification.message } /> }
      <Layout>
        { showCart && <Cart /> }
        <Products />
      </Layout>
    </>
  );
}

export default App;