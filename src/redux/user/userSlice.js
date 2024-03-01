import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    fullName: '',
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

export const {logIn} = userSlice.actions;
export default userSlice.reducer;