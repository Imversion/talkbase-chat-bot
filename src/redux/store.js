import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './reducer';
import themeReducer from './themeReducer';

const store = configureStore({
    reducer: {
        chat: chatReducer,
        theme : themeReducer
    }
});

export default store;
