import {configureStore} from "@reduxjs/toolkit";
import city from "../features/slices/citySlice.ts";

export const store = configureStore({
    reducer: {
        city
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch