
import { configureStore } from "@reduxjs/toolkit";
import toggleMneuSlice from './ReduxSlice/ToggleMenuSlice'
import userReducer from "./ReduxSlice/UserSlice";
export const store = configureStore({
    reducer:{
        sideMenu :toggleMneuSlice,
        user: userReducer, 
    }
})
