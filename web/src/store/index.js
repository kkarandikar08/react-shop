import { configureStore } from '@reduxjs/toolkit';

import products from './products-slice';
import productDetail from "./product-detail-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {
        products: products.reducer,
        productDetail: productDetail.reducer,
        cart: cartSlice.reducer
    }
});

export default store;