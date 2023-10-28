import { CartActionTypes } from "../constants/cart-action-types";


export const setCarts = (product) => {
    return {
     type : CartActionTypes.SET_CARTS,
     payload : product
    };
 }

 export const removeCart = (id) => {
   return {
    type : CartActionTypes.REMOVE_CART,
    payload : id,
   };
}

 export const setCount = (product, count, total) => {
    return {
     type : CartActionTypes.SET_COUNTS,
     payload : product,
     count : count,
     total : total
    };
 }