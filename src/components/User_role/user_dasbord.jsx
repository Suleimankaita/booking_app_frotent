import React from 'react'
import User_room_view from './user_room_view'
import { useGet_roomQuery as get_rooms } from '../../features/get_rooms'

  
const user_dasbord = () => {
    const {
        isLoading,
        isSuccess,
        isError,
        error
      }=get_rooms()
      let display

      if(isLoading){
        return <div className='load_parent'>
          <div className="loader"></div>
    
          </div>
      }
      else if(isSuccess){
         display=<User_room_view/>
    
      }
      else if(isError){
    
        return <p>connection timeout</p>
      }else if(error){
          return <p>{error.data}</p>
        }
    
    return (
  
  <section>
        {display}
    </section>

  )
}

export default user_dasbord