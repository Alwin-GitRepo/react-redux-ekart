import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name : 'wishList',
    initialState : [],
    reducers : {
        addToWishList : ((state,action)=>{
            state.push(action.payload);
        }),
        deleteFromWishList : ((state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        }),
    }
})

export const {addToWishList,deleteFromWishList} = wishListSlice.actions
export default wishListSlice.reducer