import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            //Check if item already exist in the list or not
            const existingItem = state.itemsList.find((item) => item.id === newItem.id);

            if(existingItem){
                existingItem.quantity++ ;
                existingItem.totalPrice += newItem.price;
            }else {
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price,
                })
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            //Check if item already exist in the list or not
            const existingItem = state.itemsList.find((item) => item.id === id);

            if(existingItem.quantity === 1){
                state.itemsList = state.itemsList.filter((item) => item.id !== id);
                state.totalQuantity--;
            }else{
                existingItem.quantity-- ;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        showCart(state) {
            state.showCart = !state.showCart;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;