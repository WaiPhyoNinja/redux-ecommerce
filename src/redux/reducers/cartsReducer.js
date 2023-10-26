import { CartActionTypes } from "../constants/cart-action-types";

const initialState = {
    items : []
}

export const  cartsReducer = (state = initialState , { type , payload }) => {
     switch (type) {
        case CartActionTypes.SET_CARTS:
             return {
               ...state, 
               items: [...state.items, payload],
          };
        default:
            return state;
     }
}