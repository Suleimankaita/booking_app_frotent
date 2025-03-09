import React from 'react'
import { useState as state ,useEffect as eff} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Room from './room'
import { useGet_roomQuery as getroom } from '../../../features/get_rooms'
import { selectAll_room } from '../../../features/get_rooms'
import { useSelector as selector } from 'react-redux'

const room_status = () => {

  let content;
  const [img,setimg]=state([])
  const [arr,setarr]=state([])
  const room=selector(selectAll_room)
  const {
      data,
      isSuccess,
      isLoading,
      isError,
      error
    }=getroom('getroom',{
      pollingInterval:1000,
      refetchOnFocus:true,
      refetchOnMountOrArgChange:true,
    })

         
  if(isLoading){
    return <div className='load_parent'>
      <div className="loader"></div>

      </div>
  }
  else if(isError){

    return <p>{error.data.message}</p>
  }


  let display=(
    room.map(rooms=>{
      


  return rooms.rooms.map(item=>
  {

      return(
    <Link key={rooms.id} className='con_1' to={`room/${rooms.id}`}>
    <div style={{ backgroundImage: `url(http://localhost:3500/images/${item.single})`,
 }} className='imgs'>
   </div>
   <div className="als_room">
   <div >
   <p>Available Room <span>{item.available_room}</span></p>
   {/* <p>Unavailable Room <span>{item.unavailable}</span></p> */}
   </div>
   <br />

   <p>{item.room_name}</p>
   </div>

   </Link>     
   
  )
    }
    )
    
  }
  )
  )

      return (
        
        <main className='room_status'>
      <div className="child_status">

        {/* {p} */}
        {/* {content} */}
        { 
      display
        }

      </div>

    </main>
  )
}

export default room_status
