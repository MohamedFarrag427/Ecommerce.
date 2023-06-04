import { configureStore } from "@reduxjs/toolkit";
import productItems from './CartSlice';   
import cartItems from './CartSlice';
import cartTotalAmount from './CartSlice';
import cartTotalQuantity from './CartSlice';
import reviews from './CartSlice';
import searchResult from './CartSlice';
const store = configureStore({
    reducer: {cartItems , cartTotalAmount , cartTotalQuantity , productItems , reviews , searchResult}
});

export default store;