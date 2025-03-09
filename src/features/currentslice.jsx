import { createEntityAdapter ,createSelector } from "@reduxjs/toolkit";
import { apislice } from "../api/apislice";
const currentadapter=createEntityAdapter({})

const inialstate=currentadapter.getInitialState()

export const extentdendapislice=apislice.injectEndpoints({
    endpoints:builder=>({
        getPost:builder.query({
            query:()=> "/get",
            transformResponse:res=>{
                const man=res.map(post=>{
                    post.id=post._id
                    return post
                })
                return currentadapter.setAll(inialstate,man)
            },
            providesTags:(result,err,arg)=>{
                if(result?.ids){
                    return [{type:"Posts",id:"LIST"},...result.ids.map(id=>({type:"Posts",id}))]


                }else return[{type:"Posts",id:"LIST"}]
                
            }
        }),



        getsearch:builder.query({
            query:({search,page})=>({
                url:`/search`,
                method:"GET",
                params:{search,page}
            }),
            
        }),
       
        registerNewuser:builder.mutation({
            query:body=>({
                url:"/regs",
                method:"POST",
                body:body,
            }),
            invalidatesTags:[{type:"Post",id:"LIST"}]
        }),
        updateUser:builder.mutation({
            query:({active,id})=>({
                url:`/regs`,
                method:"PATCH",
                body:{id,active}
            }),
            invalidatesTags:(result,err,arg)=>[{type:"Post",id:arg.id}]
        }
        ),
        updimgs:builder.mutation({
            query:({formdata,id})=>({
                url:`/patch/${id}`,
                method:"PATCH",
                body:formdata
            }),
            invalidatesTags:(result,err,arg)=>[{type:"Post",id:arg.id}]
        }
        ),
        deleteUser:builder.mutation({
            query:({id})=>({
                url:"/delete",
                method:"POST",
                body:{...id},
            }),
            invalidatesTags:(result,err,arg)=>[{type:"Post",id:arg.id}]

        }),
        
    })
});

    export const{
        useGetPostQuery,
        useGetsearchQuery,
        useRegisterNewuserMutation,
        useUpdateUserMutation,
        useDeleteUserMutation,
        useUpdimgsMutation,
    }=extentdendapislice

    const all=extentdendapislice.endpoints.getPost.select()
    
    const selectores=createSelector(
        all,
        res=>res.data
    );

    export const {
        selectAll,
        selectById,
        selectIds
    }=currentadapter.getSelectors(state=>selectores(state)??inialstate);


