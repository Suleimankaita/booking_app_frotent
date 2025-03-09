import React from 'react'
import { selectById } from '../features/currentslice';
import { useParams  } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Userprofile = () => {

    const {id}=useParams()
    const select=useSelector(state=>selectById(state,id))

    return (
    <div>
      {select.id}
    </div>
  )
}

export default Userprofile
