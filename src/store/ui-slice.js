import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice (
  {
    name: "ui",
    initialState: { isCartVisible: false, displayNotification: null },
    reducers: {
      toggleCart ( state )
      {
        state.isCartVisible = !state.isCartVisible;
      },

      showNotification ( state, action )
      {
        state.displayNotification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      }
    }
  }
);

export const uiActions = uiSlice.actions;

export default uiSlice;