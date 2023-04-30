import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "../features/authentication/authenticationSlice";
import {apiSlice} from '../features/api/apiSlice'
const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer
        ,
        authentication: authenticationSlice

    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;