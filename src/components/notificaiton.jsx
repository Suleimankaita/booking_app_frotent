import React from 'react'
import { useNavigate as navi } from 'react-router-dom'
import { FaBookOpen } from 'react-icons/fa'
import { useState as state,useEffect as eff } from 'react'
import notify from '../hooks/notify'
const notificaiton = () => {

  const{setnotifys}=notify()

    const navig=navi()
   const b=()=>{
    navig('/')
   }
   const [count,setcount]=state(0)
   const [red,setred]=state(0)
   const [users,setusers]=state(
    [
      {
        id:0,
        username:'suleiman',
        title:"you have to do it no matter what happen",
        room_title:"standard Room",
        seen:false,
        roles:['User']

      },
      {
        id:1,
        username:'kaita',
        title:"nice to meet you",
        room_title:"local room",
        seen:false,
        roles:['User']

      },
      {
        id:2,
        username:'yusuf',
        title:"you did a great job",
        room_title:"expensive Room",
        seen:false,
        roles:['User',"lk"]
      }
    ]
   )


   const arr=[]
   eff(()=>{
    

    setcount(prev=>prev+1)
    const man=users.map(user=>{
      return {...user,seen:true}
      
   })

   setusers(man)
   man.map(user=>{
    if(user.seen===true){
      arr.push(user.seen)
      console.log(arr.length)
      setnotifys([arr])

      console.log(user.seen)
      console.log(red.toString())
      setred(user.seen)
      console.log(user.seen.valueOf(2))
      
     }else{
      setred(user.seen.valueOf(2))

     }
   })
   
   },[])

   let  userlist=users.map(user=>{
      console.log(user.seen)
    return(
      <div className='box_message'>
        <p>{user.username}</p>
        <br />
        <p>{user.title}</p>
        <br />
        <p>Room {user.room_title}</p>
        <p style={{textAlign:"end"}}> {user.roles.toString().replace(" ,").replaceAll(" ,") }</p>
        <br />
        <p style={{textAlign:"right"}}>{user.seen? "seen":"delivered"}</p>
      </div>    
   )})

   

    return (

      

    <article className='section_views'>
    
    <main className='noficafication'>
      {userlist}

    </main>
    </article>
  )
}

export default notificaiton
