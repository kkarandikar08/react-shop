import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalQuantity: 0,
    totalPrice: 0,
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToBag(state, payload) {
            if (!state.products.find(p => p.id === payload.product.id)) {
                state.products.push(payload.product);
            }
            state.totalQuantity++;
        }
    }
});

export const { addToBag } = cartSlice.actions;

export default cartSlice;