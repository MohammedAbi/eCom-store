// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";
// import productSlice from "./productSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//     product: productSlice,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import { loadState, saveState } from "./localStorageHelpers";

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
  preloadedState: {
    cart: preloadedState,
  },
});

store.subscribe(() => {
  saveState(store.getState().cart);
});

export default store;
