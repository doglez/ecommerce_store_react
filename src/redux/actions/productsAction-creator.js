import * as ActionTypes from './action-types'

export const setProducts = (products) => ({
    type: ActionTypes.SET_PRODUCTS,
    payload: products
})

export const selectedProduct = (product) => ({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
})

export const removedSelectedProduct = () => ({
    type: ActionTypes.REMOVE_SELECTED_PRODUCT
})
