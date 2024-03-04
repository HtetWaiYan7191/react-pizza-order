import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
           state.cart.push(action.payload);
        },

        deleteCart: (state, action) => {
           state.cart = state.cart.filter(item => item.id !== action.payload)
        },

        increaseQuantity: (state, action) => {
            const item = state.cart.find(action.payload);
            item.quantity++; 
            item.totalPrice = item.price * item.quantity;
        },

        decreaseQuantity: (state, action) => {
            const item = state.cart.find(action.payload);
            item.quantity--; 
            item.totalPrice = item.price * item.quantity;
        }, 

        clearCart: (state) => {
            state.cart = [];
        }
    },
})

export function getTotalQuantity(state) {
    return state.cart.cart.reduce((sum, item) => sum + item.quantity,0)
}

export function getTotalPrice(state) {
    return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
}

export function getCurrentQuantity(id) {
   const result = initialState.cart.find(item => item.id === id)
   return result;
}

export function getCart(state) {
    return state.cart.cart
}

export const {addToCart, deleteCart, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer
