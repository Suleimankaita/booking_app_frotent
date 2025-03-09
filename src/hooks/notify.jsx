import React from 'react'
import { useState as state } from 'react'

const notify = () => {
    const [notifys,setnotifys]=state([])
  return {notifys,setnotifys}
}

export default notify