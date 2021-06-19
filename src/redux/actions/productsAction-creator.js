import demoStoreApi from "../../apis/demoStoreApi";
import * as ActionTypes from "./action-types";

export const setProducts = () => (dispatch) => {
  demoStoreApi
    .get("/products")
    .then((r) => dispatch({ type: ActionTypes.SET_PRODUCTS, payload: r.data }))
    .catch((err) => console.log("Error:", err));
};

export const selectedProduct = (productId) => (dispatch) => {
  demoStoreApi
    .get(`/products/${productId}`)
    .then((r) =>
      dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: r.data })
    )
    .catch((err) => console.log("Error:", err));
};

export const removedSelectedProduct = () => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCT,
});
