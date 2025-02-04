import { createSlice } from '@reduxjs/toolkit';
const ModeSlice = createSlice({
    name: 'mode',
    initialState: {
        mode: 'light'
    },
    reducers: {
        changeMode: (state, action) => {
            state.mode = action.payload;
        }
    }
})
export const { changeMode } = ModeSlice.actions;
export default ModeSlice.reducer;