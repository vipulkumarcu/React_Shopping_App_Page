import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice (
  {
    name: "cart",
    initialState: {
      cartItems: [],
      totalQuantity: 0,
    },
    reducers: {
      replaceCart ( state, action )
      {
        state.totalQuantity = action.payload.totalQuantity;
        state.cartItems = action.payload.cartItems;
      },

      addToCart ( state, action )
      {
        const newItem = action.payload;
        const exisitingItem = state.cartItems.find ( ( item ) => item.id === newItem.id );

        if ( !exisitingItem )
        {
          state.cartItems.push (
            {
              id: newItem.id,
              name: newItem.title,
              price: newItem.price,
              quantity: 1,
              totalPrice: newItem.price,
            }
          );
        }

        else
        {
          exisitingItem.quantity++;
          exisitingItem.TotalPrice += newItem.price;
        }

        state.totalQuantity++;
      },

      removeFromCart ( state, action )
      {
        const id = action.payload;
        const exisitingItem = state.cartItems.find ( ( item ) => item.id === id );
        if ( !exisitingItem )
        {
          return;
        }

        if ( exisitingItem.quantity === 1 )
        {
          state.cartItems = state.cartItems.filter ( ( item )  => item.id !== id )
        }

        else
        {
          exisitingItem.quantity--;
          exisitingItem.totalPrice -= exisitingItem.price;
        }

        state.totalQuantity--;
      },
    }
  }
);

export const cartActions = cartSlice.actions;

export default cartSlice;