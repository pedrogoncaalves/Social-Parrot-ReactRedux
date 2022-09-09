import { configureStore } from  "@reduxjs/toolkit";
import userReduce from '.';
const store = configureStore({
    reducer: {
        userReduce
    },
})


export type RootStore = ReturnType<typeof store.getState>;


export default store;

