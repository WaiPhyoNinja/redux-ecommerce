import { combineReducers } from "redux";
import { productsReducer , selectedProductsReducer} from "./productsReducer";
import { cartsReducer } from './cartsReducer'

const reducers = combineReducers({
    allProducts : productsReducer,
    product : selectedProductsReducer,
    carts : cartsReducer
})

export default reducers