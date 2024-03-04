import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    fullName: '',
    phone: '',
    address: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn = true;
            state.fullName = action.payload;
        }
    },
})

export const getFirstName = (state) => {
    const firstName = state.fullName?.split(' ')[0]?.toUpperCase() ?? 'Guest';
    return firstName;
}

export const {logIn} = userSlice.actions;
export default userSlice.reducer;