import React from 'react'
import { Outlet } from 'react-router-dom'
import {FaBell,FaSchool,FaHome,FaDoorOpen,FaBars,FaTimes} from "react-icons/fa"
import Navigation from '../components/navigation'
import Useauth from '../hooks/Useauth'
import { useRef as ref,useEffect as eff,useState as state } from 'react'
import { useGetPostQuery as get } from '../features/currentslice'

const layout = () => {
  const {data}=get("getsimg",{
    pollingInterval:100,
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true
  })
  const [img,setimg]=state('')
  const shows=ref()

  // let img;
  
  const show=()=>{
    shows.current.classList.add("show_nav")
    console.log(shows)
  }
  const remove=()=>{
    shows.current.classList.remove("show_nav")
    console.log(shows)
  }

  const {username,status,id}=Useauth()
  
  eff(()=>{
    const man=async()=>{


        const{ids,entities}=data

        ids.map(user=>{
            const imgs=entities[id];
          console.log(imgs.image)
            setimg(imgs.image)

        })
    }

    man()

    },[data])

  return( 
    
    <main>
        
        <header className='header'>
        
          <div style={{display:"flex",marginRight:"10px"}}>
              <h3 style={{color:"white", margin:"10px"}}>welcome  {username} </h3>
              
              <img style={{borderRadius:"50%",marginLeft:"2px"}} src={`http://localhost:3500/images/${img}`} width={"40px"} height={"40px"} alt="" />
            </div>
            
            <div >
        
            <FaBell color='white'/>
        
            </div>
        
        </header>

        <div className="bar" style={{margin:10}}>
          <FaBars className='fa' onClick={show}/>
       </div>
      
      <article className="section">

    <nav ref={shows}>
      <div className="times" style={{zIndex:"1000px",position:"relative"}}>
        <FaTimes  className='fa' color='tomato' onClick={remove}/>
      </div>
         <Navigation/>
    </nav>

    <Outlet/>


      </article>

    </main>  


)
}

export default layout
