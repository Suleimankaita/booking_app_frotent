import { configureStore } from "@reduxjs/toolkit";
import { apislice } from "../api/apislice";
import  credentialsslice from "../features/setcredentials";
export const store=configureStore({
    reducer:{
        [apislice.reducerPath]:apislice.reducer,
        auth:credentialsslice
    },
    middleware:getDefaultmiddleware=>
        getDefaultmiddleware().concat(apislice.middleware),
    devTools:true
    
})