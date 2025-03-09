import React from 'react'
import useauth from '../hooks/Useauth'
import { useEffect as eff ,useState as state} from 'react'
import {FaBell,FaSchool,FaHome,FaDoorOpen} from "react-icons/fa"
import Navigation from './navigation'
import { useGetPostQuery } from '../features/currentslice'
import { selectAll } from '../features/currentslice'
import { useSelector as select } from 'react-redux'
import UserDash from './UserDash'
import Test from "../b/test"
import EmployeeDash from './employee/employeeDash'
import Usedisplay from '../hooks/Usedisplay'
import User_dasbord from './User_role/user_dasbord'
const Dash = () => {

const selects=select(selectAll)


  const {Isadmin,Isemployee,users}=useauth()

  const [container,setcontainer]=state()

  const {
    data,
    isSuccess,
    isLoading,
    isError,
    error
  }=useGetPostQuery("Users",{
    pollingInterval:15000,
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true
  }
  )

  eff(()=>{
  
    console.log(selects)
    
  },[])
  let content;
  let displays;
  

  
     if(Isadmin){
       content=<UserDash/>
     }
     else if(Isemployee){
      content=<EmployeeDash/>
     }
     else
      if(users){
       content=<User_dasbord/>
     }
    

  



  if(isLoading){
    return <div className='load_parent'>
      <div className="loader"></div>

      </div>
  }
  else if(isSuccess){
     displays=content

  }
  else if(isError){

    return <p>connection timeout</p>
  }else if(error){
      return <p>{error.data}</p>
    }

  

  return (
    <main className='family_con' style={{width:"100%"}}>
        {/* <UserDash/> */}
        {displays}
        {/* {disl} */}
        {/* <h1>dash</h1> */}
    </main>
  )
}

export default Dash
