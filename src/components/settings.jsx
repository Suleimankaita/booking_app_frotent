import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState as state } from 'react'


const settings = () => {

  let content;

  const [roles,setroles]=state(JSON.parse(localStorage.getItem("roles")||[]))

  if(roles.roles.includes('Admin')){
    content=(
<>
<div className="st1">
     
        <Link to={'/Settings/Profile'}>
      <div className="con_profile">
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>profile settings</h3>
        </div>

      </div>
      </Link>

      <Link to={'/Settings/room_management'}>


      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>room management</h3>
        </div>

      </div>
      </Link>
      <Link to={'notification_setting'}>
      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Notification setting</h3>
        </div>

      </div>
      </Link>
      </div>
      <div className="st2">
      <div className="con_profile">
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Hotel information</h3>
        </div>

      </div>
      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Employee setting</h3>
        </div>

      </div>
      <Link to="User_settings">
      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>User setting</h3>
        </div>

      </div>
      </Link>
      </div>
      </>
    )
  }else if(roles.roles.includes('employee')){

    content=(
      <>
      <div className="st1">
        <Link to={'/Settings/Profile'}>
      <div className="con_profile">
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>profile settings</h3>
        </div>

      </div>
      </Link>

      <Link to={'/Settings/room_management'}>


      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>room management</h3>
        </div>

      </div>
      </Link>
      <Link to={'notification_setting'}>
      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Notification setting</h3>
        </div>

      </div>
      </Link>
      </div>
      <div className="st2">
      {/* <div className="con_profile"> */}
        {/* <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Hotel information</h3>
        </div> */}

      {/* </div> */}
      {/* <div className="con_profile"> */}
       
        {/* <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Employee setting</h3>
        </div> */}

      {/* </div> */}
      <Link to="User_settings">
      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>User setting</h3>
        </div>

      </div>
      </Link>
      </div>
      </>
      
    )

  }else if(roles.roles.includes('User')){

    content=(
      <>
      <div className="st1">
        <Link to={'/Settings/Profile'}>
      <div className="con_profile">
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>profile settings</h3>
        </div>

      </div>
      </Link>

      <Link to={'/Settings/room_management'}>


      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>room management</h3>
        </div>

      </div>
      </Link>
      <Link to={'notification_setting'}>
      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Notification setting</h3>
        </div>

      </div>
      </Link>
      </div>
      <div className="st2">
      <div className="con_profile">
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Hotel information</h3>
        </div>

      </div>
      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Employee setting</h3>
        </div>

      </div>
      <Link to="User_settings">
      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>User setting</h3>
        </div>

      </div>
      </Link>
      </div>
      </>
    )

  }

  return (
    <main className='settings'>

{content}
      {/* <div className="st1">
        <Link to={'/Settings/Profile'}>
      <div className="con_profile">
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>profile settings</h3>
        </div>

      </div>
      </Link>

      <Link to={'/Settings/room_management'}>


      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>room management</h3>
        </div>

      </div>
      </Link>
      <Link to={'notification_setting'}>
      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Notification setting</h3>
        </div>

      </div>
      </Link>
      </div>
      <div className="st2">
      <div className="con_profile">
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Hotel information</h3>
        </div>

      </div>
      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>Employee setting</h3>
        </div>

      </div>
      <Link to="User_settings">
      <div className="con_profile">
       
        <div className="profile_con">
        <FaUser className='prp'/>
        <h3>User setting</h3>
        </div>

      </div>
      </Link>
      </div> */}

    </main>
  )
}

export default settings
