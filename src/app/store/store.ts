import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './headerSlice';
import postSlice from './postSlice'

const store = configureStore({
    reducer: {
        header: headerReducer,
        post: postSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;