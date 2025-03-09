import { Navigate,useLocation as loc,Outlet } from "react-router-dom";
import React from 'react'
import { useState as state } from "react";
import useauth from "../hooks/Useauth";
const singlayout = ({allowedroles}) => {

    const {roles}=JSON.parse(localStorage.getItem("roles"))||[]
    
    const location=loc()
  return (
  <>
    {roles&&

        roles.some(role=> allowedroles.includes(role))?
        <Outlet/>
        :<Navigate to={"/login"} state={{from:location}} replace/>
    }
    </>
  )
}

export default singlayout