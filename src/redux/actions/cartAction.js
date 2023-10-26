import { CartActionTypes } from "../constants/cart-action-types";


export const setCarts = (product) => {
    return {
     type : CartActionTypes.SET_CARTS,
     payload : product
    };
 }