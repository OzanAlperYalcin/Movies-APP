import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'light'
}

const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        _setTheme: (state, action) => {
            localStorage.setItem('theme', action.payload)
            state.theme = action.payload
        }
    }
})

export const { _setTheme } = app.actions
export default app.reducer