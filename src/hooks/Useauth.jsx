import React from 'react'
import { useSelector as select } from 'react-redux';
import { viewdetails } from '../features/setcredentials';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
const Useauth = () => {
    const token=select(viewdetails)
    let status;
    let Isemployee=false;
    let Isadmin=false;
    let users=true;


    const save=(saverole)=>{
        localStorage.setItem("roles",JSON.stringify(saverole))

    }

    if(token){
        const decode=jwtDecode(token)

            const {username,roles,id}=decode.UserInfo;
            
            Isadmin=roles.includes("Admin")
            
            Isemployee=roles.includes("employee")
            
            users=roles.includes("User")

            
            if(Isadmin){
                
                save({Isadmin,roles})

            }else if(Isemployee){
                save({Isemployee,roles})

            }
            else if(users){
                save({users,roles})

            }
            // console.log(console.log(`users:${users} employee:${Isemployee} admin:${Isadmin}`))

    
            if(Isadmin) status="Admin"
            if(Isemployee) status="employee" 
            if(Isadmin &&users) status="Admin" 
            if(users&&Isemployee) status="employee"
            // if(users)status="User" 
                       // if(Isemployee)status=roles.includes("emloyee")

            return {username,roles,status,Isadmin,Isemployee,id,users}
    }

    return {username:"",roles:[],status,id:""}

}

export default Useauth
