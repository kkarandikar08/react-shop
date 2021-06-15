import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    loading: false,
    hasErrors: false,
    products: []
};

const products = createSlice({
    initialState: initialState,
    name: 'products',
    reducers: {
        getProducts(state) {
            state.loading = true;
        },
        getProductsSuccess(state, payload) {
            state.loading = false
            state.hasErros = false
            state.products = payload
        },
        getProductsFailure(state) {
            state.loading = false
            state.hasErros = true
        }
    }
});

export const { getProducts, getProductsSuccess, getProductsFailure } = products.actions;

export const fetchProducts = (category) => {
    return async dispatch => {
        dispatch(getProducts());

        try {
            const response = await axios.get('http://localhost:3000/products', {params: {
                category: category
                }});
            const data = response.data;

            dispatch(getProductsSuccess(data));

        } catch (error) {
            dispatch(getProductsFailure())
        }
    }
}

export default products;