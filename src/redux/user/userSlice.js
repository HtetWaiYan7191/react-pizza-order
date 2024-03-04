import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeoLocation";

const initialState = {
  isLoggedIn: false,
  fullName: "",
  phone: "",
  address: "",
  position: {},
  status: "idle",
  error: '',

};

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city}, ${addressObj?.postcode}, ${addressObj?.countryName}`;
  return { position, address };
});
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
  extraReducers: (builder) => {
    builder.addCase(fetchAddress.pending, (state) => {
      state.status = "loading";
    }),
      builder.addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
      }),
      builder.addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
  },
});

export const getFirstName = (state) => {
  const firstName =
    state.user.fullName?.split(" ")[0]?.toUpperCase() ?? "Guest";
  return firstName;
};

export const { logIn, makeOrder } = userSlice.actions;
export default userSlice.reducer;
