import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apislice } from "../api/apislice";

const get_roomAdaptor=createEntityAdapter();

const initialstate=get_roomAdaptor.getInitialState()

export const get_room_api=apislice.injectEndpoints({
    endpoints:builder=>({
        get_room:builder.query({
            query:()=>'/add_room',
            transformResponse:res=>{
                const man=res.map(room=>{
                    room.id=room._id
                    return room
                });

                return get_roomAdaptor.setAll(initialstate,man)
            },
            providesTags:(result,err,arg)=>{
                if(result?.ids){
                    return[{type:"Post",id:"LIST"},...result.ids.map(id=>({type:"Post",id}))]
                }else{
                    return[{type:"Post",id:"LIST"}]
                }
            }
        }),
        edit_room:builder.mutation({
            query:({formdata,id})=>({
                url:`/add_room/${id}`,
                method:"PUT",
                body:formdata
            }),
            invalidatesTags:(result,err,arg)=>[{type:"Post",id:arg.id}]
        }),
        delete_room:builder.mutation({
            query:({id})=>({
                url:`/add_room/${id}`,
                method:"DELETE",
                // body:{...id}
            }),
            invalidatesTags:(result,err,arg)=>[{type:"Post",id:arg.id}]
        }),
    })
})

export const {
    useGet_roomQuery,
    useEdit_roomMutation,
    useDelete_roomMutation
}=get_room_api ;

const all=get_room_api.endpoints.get_room.select();

const selector=createSelector(
    all,
    res=>res.data
);

export const {
    selectAll:selectAll_room,
    selectById:select_roomByid,
    selectIds:select_roomByids
}=get_roomAdaptor.getSelectors(state=>selector(state)??initialstate)