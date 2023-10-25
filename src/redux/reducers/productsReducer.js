import { ActionTypes } from "../constants/action-types";

const initialState = {
    products : [
        {
            id : 1,
            title : 'Macbook M1 PRO',
            category : 'desktop'
        }
    ]
}

export const  productsReducer = (state = initialState , { type , payload }) => {

     switch (type) {
        case ActionTypes.SET_PRODUCTS:
             return state;
        default:
            return state;
     }
}