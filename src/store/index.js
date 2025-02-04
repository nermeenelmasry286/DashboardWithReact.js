import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './Slices/ModeSlice';
export const store = configureStore({
    reducer: {
        modeStatus: modeReducer
    }
})
export default store;
