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
        addToBag(state) {
            state.totalQuantity++;
        }
    }
});

export const { addToBag } = cartSlice.actions;

export default cartSlice;