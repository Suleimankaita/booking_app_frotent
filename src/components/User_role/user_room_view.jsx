import React from 'react'
import { useGet_roomQuery as get_rooms } from '../../features/get_rooms'
import Rooms from './Rooms'
const user_room_view = () => {
  const { data}=get_rooms('user_fetch_room',{
    pollingInterval:1000,
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true
  })
  return (
    <div>
      <Rooms data={data}/>
    </div>
  )
}

export default user_room_view