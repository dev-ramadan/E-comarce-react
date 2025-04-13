import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../Utils/Interfaces";
import chackItemInCart from "../../../Utils/chackItemInCart";

interface ICounter {
  cartItem : IProduct[]
}

const initialState: ICounter = {

  cartItem : localStorage.getItem("cart")?
  JSON.parse(localStorage.getItem("cart")!):
  []
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState ,
  reducers: {
    addToCart: (state: ICounter, action: PayloadAction<IProduct>) => {
      state.cartItem = chackItemInCart(state.cartItem , action.payload);
      localStorage.setItem('cart',JSON.stringify(state.cartItem));
    },
    deleteProduct : (state,action) => {
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload );
      localStorage.setItem('cart',JSON.stringify(state.cartItem))
    },
    incrementQty : (state,action ) => {
      state.cartItem = state.cartItem.map(item => {
        if(item.id == action.payload){
          return {...item , qty:item.qty +1}
        }
        return item
      }) 
      localStorage.setItem("cart",JSON.stringify(state.cartItem))
    },
    decrementQty : (state,action ) => {
      state.cartItem = state.cartItem.map(item => {
        if(item.id == action.payload && item.qty > 1){
          return {...item , qty:item.qty -1 }
        }
        return item
      }) 
      localStorage.setItem("cart",JSON.stringify(state.cartItem))
    }
  }
});

export const { addToCart , deleteProduct , incrementQty , decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
