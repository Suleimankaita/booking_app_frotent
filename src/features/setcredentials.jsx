import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token:null
}

    const credentialsslice=createSlice({
        name:"auth",
        initialState,
        reducers:{
            setdetails:(state,action)=>{
                state.token=action.payload
                console.log(state.token)
            },
            logout:(state,action)=>{
                state.token=null
                console.log(state.token)

            },
            
        }
    })

    export const {setdetails,logout}=credentialsslice.actions;
    export const viewdetails=(state=>state.auth.token);
    export default credentialsslice.reducer;