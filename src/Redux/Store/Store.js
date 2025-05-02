
import { configureStore } from "@reduxjs/toolkit";
import toggleMneuSlice from './ReduxSlice/ToggleMenuSlice'
export const store = configureStore({
    reducer:{
        sideMenu :toggleMneuSlice
    }
})
