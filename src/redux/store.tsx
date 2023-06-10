import { configureStore } from "@reduxjs/toolkit";

import LanguageSlice from "./LanguageSlice/LanguageSlice";

export const store = configureStore({
    reducer: {
        language: LanguageSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;