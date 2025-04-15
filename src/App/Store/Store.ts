import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from "../features/ProductSlice/productSlice";
import serchSlice  from "../features/SerchSlice/SerchSlice";
const store = configureStore({
  reducer: {
    Cart : cartSlice,
    Search : serchSlice

  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store