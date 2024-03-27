import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: true, notification: null };

const cartUiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartUiActions = cartUiSlice.actions;
export default cartUiSlice.reducer;
