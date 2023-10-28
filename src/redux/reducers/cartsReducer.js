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
        case CartActionTypes.REMOVE_CART: 
             return {
            items : state.items.filter(product => product.id !== payload), 
             };
        default:
            return state;
     }
}

export const cartsCount = (state = initialState, { type, payload , count , total }) => {
     switch (type) {
          case CartActionTypes.SET_COUNTS:
               return {
                    ...state,
                    items: [...state.items, payload, count , total],
               };
          default:
               return state;
     }
}