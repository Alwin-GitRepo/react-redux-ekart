import {configureStore} from "@reduxjs/toolkit"
import wishListSlice from "./Slices/wishListSlice"
import cartSlice from "./Slices/cartSlice"

const store = configureStore({
    reducer : {
        wishListReducer : wishListSlice,
        cartReducer : cartSlice
    }
})

export default store