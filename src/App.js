import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

let initial = true;

function App ()
{
  const dispatch = useDispatch ();

  const showCart = useSelector ( state => state.ui.isCartVisible );
  const notification = useSelector ( state => state.ui.displayNotification );
  const cart = useSelector ( state => state.cart );

  useEffect (
    () => {
      async function sendCartData ()
      {
        dispatch (
          uiActions.showNotification ( 
            {
              status: "pending",
              title: "Sending....",
              message: "Sending cart Data..."
            }
          )
        );

        const response = await fetch ( "https://shopping-page-redux-7c6d4-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify ( cart ),
          }
        );

        if ( !response.ok )
        {
          throw new Error ( "Failed to Send Data !!!" );
        }

        dispatch ( uiActions.showNotification ( 
            {
              status: "success",
              title: "Successful",
              message: "Data Sent Successfully !!!"
            }
          )
        );
      }

      if ( initial )
      {
        initial = false;
        return;
      }

      sendCartData ().catch (
        ( error)  => {
          dispatch ( uiActions.showNotification ( 
              {
                status: "error",
                title: "Failed !",
                message: "Failed to Send Data !!!"
              }
            )
          ); 
        }
      )
    },

    [ cart, dispatch ]
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