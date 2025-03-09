import React from 'react'
import { Link } from 'react-router-dom'
// import img1 from '../../../img/pexels-pixabay-164595.jpg'

const room_management = () => {
  return (
    <section className='section_room'>

        <div className="room_flex">
    <div className="add_room">
          <Link to={'Add_room'}  className='room_link'>
      <button className='room_btn'>
      Add room
      </button>
    </Link>
    </div>
          {/* <Link to={'Add_room'} style={{width:"50%"}} className='room_link'> */}

    <div className=" add_room ">

      <button className='room_btn'>
        <Link to={'edit_room'}>
    Edit roomStatus
</Link>
      </button>
        {/* <h3>Edit roomStatus</h3> */}
    </div>
    </div>

    </section>
  )
}

export default room_management