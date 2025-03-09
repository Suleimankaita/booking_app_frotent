// import { createSelector,createEntityAdapter } from "@reduxjs/toolkit";
// import { apislice } from "../api/apislice";
// const transaction_adpt=createEntityAdapter({})

// const inialstate=transaction_adpt()

// export const transactionapi=apislice.injectEndpoints({
//     endpoints:(builder)=>({
//         getTransaction:builder.query({
//             query:()=> "/transation",
//             transformResponse:res=>{
//                 const man=res.map(tran=>{
//                     tran.id=tran._id
//                     return tran
//                 });
//                 return transaction_adpt.setAll(inialstate,man);
//             },
//             providesTags:(result,err,arg)=>{
//                 if(result?.ids){
//                     return[{type:"transaction",id:"List"},...result.ids.map(id=>({type:"transaction",id}))]
//                 }else{
//                     return[{type:"transaction",id:"List"}]
//                 }
//             }
//         })
//     }),
// })
// export const {useGetTransactionQuery}=transactionapi;

// const all=transactionapi.endpoints.getTransaction.select()

// const selector=createSelector(
//     all,
//     res=>res.data
// )

// export const {
// selectAll:selectTransacton,
// selectById:selectTransactionId,
// selectIds:selectTransactionIds,
// }=transaction_adpt.getSelectors(state=>selector(state)??inialstate)