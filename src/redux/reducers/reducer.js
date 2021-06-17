import { combineReducers } from "redux";
import { allProducts, selectedProduct } from "./productReducer";

const reducers = combineReducers({
    allProducts: allProducts,
    selectedProduct: selectedProduct
})

export default reducers