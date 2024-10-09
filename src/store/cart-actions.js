import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export function fetchCartData ()
{
  return async ( dispatch ) => {
    async function fetchData ()
    {
      const response = await fetch ( "https://shopping-page-redux-7c6d4-default-rtdb.firebaseio.com/cart.json" );

      if ( !response.ok )
      {
        throw new Error ( "Unable to Fetch Cart Details !" );
      }

      const data = await response.json ();

      return data;
    }

    try
    {
      const cartData = await fetchData ();

      dispatch ( cartActions.replaceCart (
          {
            cartItems: cartData.cartItems || [],
            totalQuantity: cartData.totalQuantity || 0,
          }
        )
      );
    }
    
    catch ( error )
    {
      dispatch ( uiActions.showNotification ( 
          {
            status: "error",
            title: "Failed !",
            message: "Failed to Load Data !!!"
          }
        )
      ); 
    }
  }
}

export function sendCartData ( cart )
{
  return async ( dispatch ) => {
    dispatch (
      uiActions.showNotification ( 
        {
          status: "pending",
          title: "Sending....",
          message: "Sending cart Data..."
        }
      )
    );

    async function putData ()
    {
      const response = await fetch ( "https://shopping-page-redux-7c6d4-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify (
            {
              cartItems: cart.cartItems,
              totalQuantity: cart.totalQuantity,
            }
          ),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if ( !response.ok )
      {
        throw new Error ( "Failed to Send Data !!!" );
      }
    }

    try
    {
      await putData ();

      dispatch ( uiActions.showNotification ( 
          {
            status: "success",
            title: "Successful",
            message: "Data Sent Successfully !!!"
          }
        )
      );
    }
    
    catch ( error )
    {
      dispatch ( uiActions.showNotification ( 
          {
            status: "error",
            title: "Failed !",
            message: "Failed to Send Data !!!"
          }
        )
      ); 
    }
  }
}