import { IProduct } from "./Interfaces";

const chackItemInCart = (cartItem:IProduct[],product:IProduct) => {
   const exit =  cartItem.find((item:IProduct) => item.id === product.id)
   if(exit){
    return cartItem.map((item:IProduct)=> item.id === product.id ? {...item,qty:item.qty +1 } : item)
   }else{
    return [...cartItem,{...product,qty:1}]
   }
}
export default chackItemInCart