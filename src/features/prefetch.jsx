import React from 'react'
import { useEffect as eff } from 'react'
import { store } from '../app/store'
// import { transactionapi } from './transaction'
import { extentdendapislice } from './currentslice'

const prefetch = () => {
    let transaction
    let extend
    eff(()=>{
        transaction=store.dispatch(transactionapi.endpoints.getTransaction.initiate())
        transaction=store.dispatch(extentdendapislice.endpoints.getPost.initiate())
   
        return()=>{
            // transaction.uns
        }

     },[])

    return{}
}

export default prefetch