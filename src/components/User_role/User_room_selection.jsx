import React from 'react'
import { useParams as param } from 'react-router-dom'
import { select_roomByid } from '../../features/get_rooms'
import { Link } from 'react-router-dom'
import { useSelector as select } from 'react-redux'
import { useState as state,useEffect as eff,useRef as ref } from 'react'
import axios from 'axios'
import { useGet_roomQuery as getroom} from '../../features/get_rooms'
import { useNavigate as navigate } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Default theme
import { format, differenceInDays } from 'date-fns';
import {FaUser,FaCaretDown} from 'react-icons/fa'

const User_room_selection = ({item}) => {

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
  let isamounted=true
  const {id}=param()
  const find=select(state=>select_roomByid(state,id))
   const[change,setchange]=state()
     const [all,setall]=state()
      const [alls,setalls]=state()  
        const [room_available,setroom_available]=state()
          const [room_unavailable,setroom_unavailable]=state(3)
            const [price,setprice]=state()
             const [room_name,setroom_name]=state()
             const navi=navigate()
                const [open,setopen]=state(false)
                const [rooms,setrooms]=state(1)
                const [adults,setadults]=state(1)
                const [child,setchild]=state(1)

             eff(()=>{
              if(isamounted){
              
                        if(find){
                          console.log(id)
                          // setid(id)
                          setall(find.rooms.map(rooms=>{
                            setprice(rooms.room_price)
                            setroom_name(rooms.room_name)

                            return rooms.room_image.slice(0,3).map((img,_)=>{
                              return(
                              
                
                              <div key={_} className='margins lopse'>
                              <img className='img' onMouseOver={(e)=>setchange(`http://localhost:3500/images/${img}`)} src={`http://localhost:3500/images/${img}`} alt="" width={"130px"} height={'138px'} />
                              </div>
                            )})
                          }))
                          setalls(find.rooms.map(rooms=>{
                            setchange(`http://localhost:3500/images/${rooms.room_image[0]}`)
                            return rooms.room_image.slice(3,6).map((img,_)=>{
                              
                              return(
                              <div key={_} className='margins '>
                              <img className='img' onMouseOver={(e)=>setchange(`http://localhost:3500/images/${img}`)} src={`http://localhost:3500/images/${img}`} alt="" width={"130px"} height={'138px'} />
                              </div>
                            )})
                          }))
                          // console.log(find)
                        }
                        }

                        return()=>{
                          isamounted=false
                        }
                      },[find])
                   
        
                      const show=()=>{
                          setopen(prev=> !prev)
                      }
 
  


    const [dateRange, setDateRange] = state([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const [isCalendarVisible, setIsCalendarVisible] = state(false);

    const handleSelect = (ranges) => {
        setDateRange([ranges.selection]);

        console.log(format(dateRange[0].startDate, 'yyyy-MM-dd'))
        console.log(format(
          dateRange[0].endDate+1,
          'yyyy-MM-dd'
  ))
    };

    const toggleCalendar = () => {
        setIsCalendarVisible(!isCalendarVisible);
    };

    const calculateTotal = () => {
        const { startDate, endDate } = dateRange[0];
        const days = differenceInDays(endDate, startDate) + 1; // Include the start day
        return days > 0 ? days * 100 : 0;
    }

    const addroom=()=>{ 
      setrooms(prev=>prev+1)
      
    }
    const childs=()=>{
      setchild(prev=>prev+1)

    }
    
    const adult=()=>{
      setadults(prev=>prev+1)

    }



    return (
        <section className='room_elements' >
          {find&& 
         <main className='room_elements2'>
          <div className="all_cons">
          <div className="images ">
              {all}
              </div>
              <div className="img_s">
               <div className='find_img' style={{backgroundImage:`url(${change})`,marginBottom:"10px" }}></div>
               
                <h3 style={{position:"relative",top:"30px"}}>{room_name}</h3>
                </div>
              <div className="images nones">
              {all}
              </div>
                <div className="images">
              {alls}
              </div>
                </div>
                {/* <div className="mk" >
         <div className="cons">
         <p style={{fontSize:"45px",textAlign:"center"}}>{room_available}</p>
          <span style={{fontSize:"25px",textAlign:"center"}}>Total available </span>
         </div>
         <div className="cons">
         <p style={{fontSize:"45px",textAlign:"center"}}>{room_unavailable}</p>
          <p style={{fontSize:"20px",textAlign:"center"}}>Total unavailable </p>
          {/* <h3>Total unavailable <span>{find.unavailable}</span></h3>  

          </div>
         <div className="cons">
         <p style={{fontSize:"45px",textAlign:"center"}}>{price}</p>
         <p style={{fontSize:"20px",textAlign:"center"}}>Room price </p>
         </div>
          

         </div> */}
         <div className="save2">

        <div className="save_pro">
         
         <p>
         Our Standard room comes with single bed, and lots of in-room facilities. The room sizes vary from 150 to 160 sqf. It has a 40-inch flat screen TV equipped with IPTV entertainment package, an in-room Bluetooth enabled audio mini amplifier compatible with all phones and tablets for the enjoyment of our guest.
         </p>
         <div className="fav">
         <h3 style={{position:"relative",top:"30px"}}>{room_name}</h3>
         </div>
         </div>
         </div>
         <br /><br /><br /><br />
         <hr />
        <div className="check_ins">
        <div className="check_in">
         <h1>Availability</h1>
        {/* <button onClick={show}>check_in</button> */}

        {/* {open?( */}
    <div className='con_in'>
 {/* <input type="text"
         className='inp2'
         name="" id="" /> */}

    <div  style={{ textAlign: 'center', }}>


             {/* Input Field to Show/Hide Calendar */}
                 <input
                     className='inp_calendar'
                     type="text"
                     value={`${format(dateRange[0].startDate, 'yyyy-MM-dd')} to ${format(
                         dateRange[0].endDate+1,
                         'yyyy-MM-dd'
                     )}`}
                     readOnly
                     onClick={toggleCalendar}
                     style={{
                         padding: '10px',
                         fontSize: '16px',
                         textAlign: 'center',
                         cursor: 'pointer',
                        //  width: '300px',
                         border: '1px solid #ccc',
                         borderRadius: '4px',
                     }}
                 />

             {/* Calendar */}
             {isCalendarVisible && (
                 <div style={{  zIndex: 1000, }}>
                     <DateRange
                         editableDateInputs={true}
                         onChange={handleSelect}
                         moveRangeOnFirstSelection={false}
                         ranges={dateRange}
                            className="custom"
                         onRangeFocusChange={(focusedRange) => {
                             if (focusedRange[0] === -1) {
                                 setIsCalendarVisible(false);
                             }
                         }}
                     />
                 </div>
             )} 

             {/* Summary */}
             <div style={{ marginTop: '20px' }}>
                 {/* <h3>Total Amount: ${calculateTotal()}</h3> */}
             </div>
         </div>
             {/* <div className="flex2"> */}
        <div className="mks">
         <div className='btn_select' onClick={show}>
          <div style={{display:"flex"}}>
          <FaUser className='sps'/>
          <FaUser className='sps'/>
          <FaUser className='sps'/>
          </div>
          <div className="arow">
            <FaCaretDown/>
          </div>
          </div>
          {open  &&
          <div className='mas'>
          <div className='blocks'>
              <div className="ku">
              <div className="room_1">
                <h1>room</h1>
              </div>
              <div className="room_1">
                <h1>adult</h1>
              </div>
              <div className="room_1">
                <h1>child</h1>
              </div>
              </div>

            <div className="ku">
          <div className="btn_mov">
            <button  disabled={rooms===0}  onClick={(e)=>setrooms(prev=>prev-1)}> <span>-</span></button>
            <span className='spq'>{rooms}</span>
            <button onClick={addroom}><span>+</span></button>
          </div>

          <div className="btn_mov">
            <button  disabled={child===0}  onClick={(e)=>setchild(prev=>prev-1)}> <span>-</span></button>
            <span className='spq'>{child}</span>
            <button onClick={childs}><span>+</span></button>
          </div>
         
          <div className="btn_mov">
            <button  disabled={adults===0}  onClick={(e)=>setadults(prev=>prev-1)}> <span>-</span></button>
            <span className='spq'>{adults}</span>
            <button onClick={adult}><span>+</span></button>
          </div>
          </div>
          </div>
          <div className="pa_btn">
          <button onClick={(e)=> setopen(false)}>Done</button>
          </div>
          </div>
          }
          </div>
         {/* </div> */}
    </div>
        {/* ):(<></>)} */}
        
        </div>
        </div>

        <br />
        <br />
        <br />
            </main>
        }  
         
      </section> 
         )
}

export default User_room_selection