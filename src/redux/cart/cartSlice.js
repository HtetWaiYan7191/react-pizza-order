import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        console.log(action.payload);
      state.cart.push(action.payload);
    },

    deleteCart: (state, action) => {
        console.log(action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity > 0 && item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
      state.cart = state.cart.filter(item => item.quantity > 0)
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export function getTotalQuantity(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function getTotalPrice(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
}

export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export function getCart(state) {
  return state.cart.cart;
}

export const getIngredients = (id) => (state) => {
    console.log(state.cart.cart)
   const test = state.cart.cart.find((item) => item.id === id)?.ingredients ;
   console.log(test);
   return test;
}

export const {
  addToCart,
  deleteCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
