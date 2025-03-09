import { createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const api =createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3500'}),
    tagTypes:['post'],
    endpoints:builder=>({
        posts:builder.mutation({
            query:({formdata,id})=>({
                url:`/add/${id}`,
                method:'PATCH',
                body:formdata

            }),
            invalidatesTags:['post']
        }),
    })
})

export const {usePostsMutation}=api