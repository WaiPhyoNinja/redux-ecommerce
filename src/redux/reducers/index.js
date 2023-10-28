import { combineReducers } from "redux";
import { productsReducer , selectedProductsReducer} from "./productsReducer";
import { cartsCount, cartsReducer } from './cartsReducer'

const reducers = combineReducers({
    allProducts : productsReducer,
    product : selectedProductsReducer,
    carts : cartsReducer,
    counts : cartsCount
})

export default reducers