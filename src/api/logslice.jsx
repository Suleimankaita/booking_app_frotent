import { apislice } from "./apislice";
import { logout } from "../features/setcredentials";

 const logslice=apislice.injectEndpoints({
    endpoints:bulider=>(({
        login:bulider.mutation({
            query:(logdata)=>({
                url:"/auth",
                method:"POST",
                body:{...logdata}
            })
        }),
        logout:bulider.mutation({
            query:()=>({
                url:"/auth/logout",
                method:"POST"
            }),
          async onQueryStarted(args,{queryFulfilled,dispatch}){
                const {data}=await queryFulfilled
                console.log(data);
                dispatch(logout);
                setTimeout(()=>{
                dispatch(apislice.util.resetApiState());
                },1000)
             },
            }),
            updimg:(bulider.mutation)({
                query:(id)=>({
                    url:"/img",
                    method:"PATCH",
                    body:{...id}
                })
            }),
            add_room:(bulider.mutation)({
                query:(body)=>({
                    url:"/add_room",
                    method:"POST",
                    body:body
                })
            }),
    })),
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useUpdimgMutation,
    useAdd_roomMutation
}=logslice