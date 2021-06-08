import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    loading: false,
    hasErrors: false,
    product: {}
};

const productDetail = createSlice({
    initialState: initialState,
    name: 'productDetail',
    reducers: {
        getProductDetail(state) {
            state.loading = true;
        },
        getProductDetailSuccess(state, payload) {
            state.loading = false
            state.hasErros = false
            state.product = payload
        },
        getProductDetailFailure(state) {
            state.loading = false
            state.hasErros = true
        }
    }
});

export const { getProductDetail, getProductDetailSuccess, getProductDetailFailure } = productDetail.actions;

export const fetchProductDetail = (productId) => {
    return async dispatch => {
        dispatch(getProductDetail(productId));

        try {
            const response = await axios.get('http://localhost:3000/product-detail', {params: {
                    id: productId
                }});
            const data = response.data;

            dispatch(getProductDetailSuccess(data));

        } catch (error) {
            dispatch(getProductDetailFailure())
        }
    }
}

export default productDetail;