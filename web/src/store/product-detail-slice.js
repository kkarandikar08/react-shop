import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    hasErrors: false,
    product: {}
};

const productDetail = createSlice({
    initialState: initialState,
    name: 'productDetail',
    reducers: {
        getProductDetail(state, payload) {
            state.loading = true;
            state.product = payload.payload.product;
        },
    }
});

export const { getProductDetail } = productDetail.actions;

export default productDetail;