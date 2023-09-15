import { createReducer } from '@reduxjs/toolkit';
import { initialTheme } from './models/theme';

const themeReducer = createReducer(initialTheme, (builder) => {
    // builder.addCase(updateTheme, (state, action) => {
    //     return { ...state, ...action.payload };
    // });
});

export default themeReducer;
