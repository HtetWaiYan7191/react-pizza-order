import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  fullName: "",
  phone: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.fullName = action.payload;
    },
    makeOrder: (state, action) => {
      state.isLoggedIn = true;
      state.fullName = action.payload.customer;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
    },
  },
});

export const getFirstName = (state) => {
  const firstName =
    state.user.fullName?.split(" ")[0]?.toUpperCase() ?? "Guest";
  return firstName;
};

export const { logIn, makeOrder } = userSlice.actions;
export default userSlice.reducer;
