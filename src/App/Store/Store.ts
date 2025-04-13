import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from "../features/counter/productSlice";
const store = configureStore({
  reducer: {
    Cart : cartSlice,

  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store