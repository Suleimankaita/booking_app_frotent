import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setdetails } from "../features/setcredentials";
import { useNavigate as nav } from "react-router-dom";


const baseQuery=fetchBaseQuery({baseUrl:"http://localhost:3500",
    
    credentials:"include",
    
    prepareHeaders:(headers,{getState})=>{
        
        const token=getState()?.auth?.token
        if(token){
            headers.set("authorization",`Bearer ${token}`)
            
        }
        return headers;
    }
    
})

    const baseQuerywithreauth=async(arg,api,extraopt)=>{
        
        let result=await baseQuery(arg,api,extraopt)
        // console.log("first")
        
        if(result?.error?.originalStatus===403){
        // console.log("forbideen")
            const secoundresult=await baseQuery("/refresh",api,extraopt)
            
            if(secoundresult?.data){
        // console.log("secound")

                console.log(secoundresult.data.accesstoken)
                await api.dispatch(setdetails(secoundresult?.data?.accesstoken));
                result=await baseQuery(arg,api,extraopt)

                //  return secoundresult
                 
            }else{
                await api.dispatch(setdetails(secoundresult?.data?.accesstoken));
            //    navi("/login")
                secoundresult.error.data.message='your login expired'
            }

        }
        return result
    }

export const apislice=createApi({
    reducerPath:"api",
    baseQuery:baseQuerywithreauth,
    tagTypes:["Post","transaction"],
    endpoints:(builder)=>({})
})