import React from 'react'
import {FaUser} from "react-icons/fa"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import "react-date-range/dist/styles.css"; // Main style
// import "react-date-range/dist/theme/default.css"; // Theme style
// import { DateRangePicker } from 'react-date-range'
import { useEffect,useState } from 'react'
import img1 from '../../img/How to Make a Bed Like Hotel_ Secrets for a Luxurious Sleep Sanctuary - Bark and Chase.jpeg'
import img3 from '../../img/pexels-pixabay-164595.jpg'
import img2 from '../../img/48FallBedroomIdeasYouHaven’tSeenBefore.jpeg'
import { Link } from 'react-router-dom'


const Rooms = ({data}) => {
    const [nxt,setnxt]=useState(0)
    const [prv,setprv]=useState(0)
    const [display,setdisplay]=useState([])
    const [datess,setdatess]=useState({
        
            key: "selection",
            startDate: new Date(),
            endDate: new Date(),
          
    })
    const [name,setname]=useState('')
    const [body,setbody]=useState('')
    // let name
    const arr=[]
    const ims=[img1,img2,img3]
    const message=[
        {
       id:0,
        body:'Welcome to Excellence',
        title:"Welcome to hotel"
    },
        {
       id:1,
        body:'Experience Hospitality Simplified!',
        title:"Welcome to hotel"
    },
        {
       id:2,
        body:'Experience Hospitality Simplified!',
        title:"Welcome to hotel"
    },
        {
       id:3,
        body:'Discover Seamless Stays!!',
        title:"Welcome to hotel"
    },

]
let room
    useEffect(()=>{
        const man=async()=>{
            const {ids,entities}=data
            const fetch_data=ids.map(id=>{
                return entities[id]
            
            })
            setdisplay(fetch_data)

        }
        man()

        const names=message.map(name=>{
            setname(name.title)
            setbody(name.body)
       })
    },[data])


    useEffect(()=>{
            const clear=setInterval(() => {
               
      setnxt((prevIndex) => (prevIndex + 1) % ims.length);
                
            }, 7000);

            return ()=>{
                clearInterval(clear)
            }

    },[])

    const prevSlide = () => {
        setnxt((prevIndex) => (prevIndex - 1 + ims.length) % ims.length);
      };
    

    const nextSlide=()=>{
      setnxt((prevIndex) => (prevIndex + 1) % ims.length);
        
    }

    const handleRangeChange=(ranges)=>{
        setdatess(ranges.selection)
    }
        // if(display.length){

    room=display.map(rooms=>{
        console.log(rooms)
       return rooms.rooms.map(room=>{
        // name=room.room_name
        return (
        <div className='room_con' key={rooms.id}>
            <div className='ima' style={{backgroundImage:`url(http://localhost:3500/images/${room.single})`}}></div>
            <div className="pi">
                <h3 style={{margin:"10px"}}>{room.room_name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, deleniti a nam impedit quidem excepturi illo tempore nihil, reiciendis repellat modi dolor, inventore possimus tempore porro eius quia sint facere mollitia? Perferendis quidem aperiam minima ducimus alias quae neque quibusdam fugit.</p>
            </div>
            <div className="lps">
        <button>Learn more</button>
            <Link to={`${rooms.id}`}>
        <button style={{backgroundColor:"rgb(49, 197, 255)",color:"whitesmoke"}}>Book now</button>
            </Link>
            </div>
        </div>
        )})
    }

        
    )
    
    const goToSlide=(p)=>{
        setnxt(p)
    }
    const [dates,setdates]=useState(new Date().toDateString())
        
        
    return (
        <>
        <div className="marg">
            <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${nxt * 100}%)` }}>
        {ims.map((src, index) => (
          <div className="carousel-item" key={index}>
            <div className="abs">
                <div className="ip">
            <h1>{name}</h1>
            <h1>{body}</h1>
            </div>

            </div>
            <img src={src} alt="" width={"300px"} height={"100%"} />
          </div>
        ))}
      </div>
 <div className="carousel-controls">
        <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
      </div>

      <div className="absp">
        <div className="my_itms">
            <div className='childs'>
        <label htmlFor="Date">Arrival</label>
        <input type="date" 
        value={dates}
        onChange={(e)=>setdates(e.toISOString().split("T")[0])}
        />
        </div>
            <div className='childs'>
        <label htmlFor="Date">Departure</label>
        <input type="date" />
        </div>
        <button className='books'>Book now</button>

        </div>

      </div>
    
            </div>
        </div>
        <div className="box_con">
       <h1>Our Rooms & Suite</h1>
            </div>
       
        
    <div className='parent_room'>
        {room}
    </div>
    </>
  )
}

export default Rooms