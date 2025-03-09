import React from 'react'
import {FaBell,FaCog,FaHome,FaDoorOpen,FaCalendarAlt,FaHistory,FaUser,FaRestroom,FaRegCheckCircle} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useEffect as eff } from 'react'
import { useLogoutMutation as logouts } from '../api/logslice'
import { useNavigate as nav, } from 'react-router-dom'
import Useauth from '../hooks/Useauth';
import Usedisplay from '../hooks/Usedisplay'
import notify from '../hooks/notify'

const navigation = () => {
    const {notifys}=notify()

    const [log,{isLoading,isSuccess}]=logouts()
    
    const {id}=Useauth()
    
    let img;
 
    const {setdisplay,display}=Usedisplay()

    
    const navi=nav()
    
    eff(()=>{
    
        if(isSuccess){
            setTimeout(() => {
            
                localStorage.removeItem("roles")
            }, 1000);
        }
    },[isSuccess,navi])
    
    const logout=async()=>{
        log()
    
    }

    const {Isadmin,Isemployee,users}=JSON.parse(localStorage.getItem("roles")||[])

    let content;

    if(Isadmin){
        content=(   
             <ul className='ul'>
                
                <div className="als">
        <NavLink to="/" >
            <div className="child">
              <FaHome className='svg'/><li> Home</li>
            </div>
        </NavLink>
  
        <NavLink to="/Userpermit" >
        <div className="child">
         <FaUser className='svg'/><li>Userpermit</li>
        </div>
    </NavLink>
  
  <NavLink to="/notification" >
        <div className="child">
            <FaBell className='svg'/><li>Notificaion</li>
        </div>
    </NavLink>
  <NavLink to="/overview" >
        <div className="child">
            <FaRegCheckCircle className='svg'/><li>over view</li>
        </div>
    </NavLink>

    {/* <NavLink to="/history" >
        <div className="child">
         <FaHistory/><li>History</li>
        </div>
    </NavLink> */}
    
    <NavLink to="/bookings_list" >
            <div className="child">
             <FaCalendarAlt className='svg'/><li>Bookings List</li>
            </div>
        </NavLink>
    <NavLink to="/Roomstatus" >
            <div className="child">
             <FaRestroom className='svg'/><li>room status</li>
            </div>
        </NavLink>
    </div>

        <div className="space_evenly">
    <NavLink to="/Settings" >
            <div className="child">
             <FaCog className='svg'/><li>settings</li>
            </div>
        </NavLink>

        <div className="child" onClick={logout}>
            <FaDoorOpen className='svg'/><li>Logout</li>
        </div>
        </div>
</ul>
)
    }else if(Isemployee){
        content=(    <ul className='ul'>
                <div className="als">
            <NavLink to="/" >
                <div className="child">
                  <FaHome className='svg'/><li> Home</li>
                </div>
            </NavLink>
      
          
      <NavLink to="/notification" >
            <div className="child">
                <FaBell className='svg'/><li> Notificaion</li>
            </div>
        </NavLink>
    
        <NavLink to="/Userpermit" >
        <div className="child">
         <FaUser className='svg'/><li>Userpermit</li>
        </div>
    </NavLink>
        
        <NavLink to="/bookings_list" >
            <div className="child">
             <FaCalendarAlt className='svg'/><li>Bookings List</li>
            </div>
        </NavLink>
        
        </div>
    
           
        <div className="space_evenly">
    <NavLink to="/Settings" >
            <div className="child">
             <FaCog className='svg'/><li>settings</li>
            </div>
        </NavLink>

        <div className="child" onClick={logout}>
            <FaDoorOpen className='svg'/><li>Logout</li>
        </div>
        </div>
    </ul>
    )
    }else 
    if(users){
        content=(   
            <ul className='ul'>
            <div className="als">
        <NavLink to="/" >
            <div className="child">
              <FaHome className='svg'/><li> Home</li>
            </div>
        </NavLink>
  
      
        <NavLink to="/history" >
    <div className="child">
     <FaHistory className='svg'/><li> Booking History</li>
    </div>
</NavLink> 
    
        <NavLink to="/history" >
    <div className="child">
     <FaHistory className='svg'/><li> payment History</li>
    </div>
</NavLink> 
    
    
    </div>

       
    <div className="space_evenly">
<NavLink to="/Profile" >
        <div className="child">
         <FaUser className='svg'/><li>Edit profile</li>
        </div>
    </NavLink>

    <div className="child" onClick={logout}>
        <FaDoorOpen className='svg'/><li>Logout</li>
    </div>
    </div>
</ul>
    )
    
}

 eff(()=>{

    if(isSuccess){
        navi("/login")
    }

 },[navi,isSuccess])

 if(isLoading) return <p>loading.....</p>

  return (
    <div className="fle">
    {content}

</div>
  )
}

export default navigation
