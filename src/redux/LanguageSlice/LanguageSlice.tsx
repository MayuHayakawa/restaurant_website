import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageState, English } from "./Language";

const initialState: LanguageState = English;

export const LanguageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (_, action: PayloadAction<LanguageState>) => {
            return action.payload
        }
    },
});

export const { changeLanguage } = LanguageSlice.actions;
export default LanguageSlice.reducer;