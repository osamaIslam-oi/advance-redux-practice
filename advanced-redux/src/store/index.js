import { configureStore } from "@reduxjs/toolkit";
import cartUIReducer from "./cartUi";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: cartUIReducer,
    cart: cartReducer,
  },
});

export default store;
