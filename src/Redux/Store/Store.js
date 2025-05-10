
import { configureStore } from "@reduxjs/toolkit";
import toggleMneuSlice from './ReduxSlice/ToggleMenuSlice'
import userReducer from "./ReduxSlice/UserSlice";
import appointment from "./ReduxSlice/appointmentSlice";
export const store = configureStore({
    reducer:{
        sideMenu :toggleMneuSlice,
        user: userReducer, 
        doctor:appointment
    }
})
