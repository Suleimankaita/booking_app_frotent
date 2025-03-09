import React from 'react'
import { useParams as param } from 'react-router-dom'
import { select_roomByid } from '../../../features/get_rooms'
import { Link } from 'react-router-dom'
import { useSelector as select } from 'react-redux'
import { useState as state,useEffect as eff,useRef as ref } from 'react'
import axios from 'axios'
import { useGet_roomQuery as getroom, useEdit_roomMutation as edit_room ,useDelete_roomMutation as deletes} from '../../../features/get_rooms'
import { useNavigate as navigate } from 'react-router-dom'

const room = ({item}) => {

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
  const shows=ref()
  const show=()=>shows.current.classList.toggle("shows")
   const [edit,{isLoading:loading,isSuccess:success}]=edit_room() 
   const [del,{isSuccess:succ,isLoading:load}]=deletes()
   const[change,setchange]=state()
     const [all,setall]=state()
      const [alls,setalls]=state()  
        const [room_available,setroom_available]=state()
          const [room_unavailable,setroom_unavailable]=state(3)
            const [price,setprice]=state()
             const [room_name,setroom_name]=state()
             const [room_price,setroom_price]=state('')
             const [available_room,setavailable_room]=state('')
             const [room_img1,setroom_img1]=state([])
             const [existingImages, setExistingImages] = state([]);
             const navi=navigate()
          const arr=[]
         
             const submit=async()=>{

             
                 try{
         
                     const formdata=new FormData()

                     formdata.append('room_name',room_name)
                     
                     formdata.append('room_price',Number(room_price))
                     
                     formdata.append('available_room',Number(available_room))
                     
                    //  if(room_img1){

                    // existingImages.forEach((img) => formdata.append('img', img));
                     formdata.append('img', existingImages);
                      //  (room_img1).forEach(key=>{
                        Array.from(room_img1).forEach((file) => {
                          return formdata.append("file",file)})
                        //  formdata.append('file',room_img1.item(key))
                         
                         console.log(room_img1)
                         
                        // })
                        const res=await edit({formdata,id})
                        console.log(res.data)
                   
                      // }else if(room_img2){
                        // formdata.append('file',arr)
                        // const res=await edit({formdata,id})
                        // console.log(res.data)
                      // }
                    
                   
                    
         
                 }catch(err){
                     console.log(err.message)
                
                     alert(err.message)

                 }
         
             }
             eff(()=>{
                 if(success){
                     alert("new item is added")
                     return navi('/Roomstatus')
                 }
             },[success,navi])
       
             eff(()=>{
                 if(succ){
                     return navi('/settings')
                 }
             },[succ,navi])
                     


             eff(()=>{
              if(isamounted){
              
                        if(find){
                          console.log(id)
                          // setid(id)
                          setall(find.rooms.map(rooms=>{
                            setprice(rooms.room_price)
                            setroom_price(rooms.room_price)
                            setavailable_room(rooms.available_room)
                            setroom_name(rooms.room_name)
                            setExistingImages(rooms.room_image || []);
                            console.log(rooms.room_image)
                              rooms.room_image.map((img) => {
                                arr.push(img)
                                console.log(arr)
                                  setroom_img1((prev) => ({ ...prev, img })); // Use unique keys to avoid overwriting
                              });

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
                   
        
  if(isLoading){
    return <div className='load_parent'>
      <div className="loader"></div>

      </div>
  }
  else if(isError){

    return <p>connection timeout</p>
  }else if(error){
      return <p>{error.data}</p>
    }
  

    const dele=async()=>{
      try{
        // const confir=confirm('do you what reove this room ')
        // if(confir){
          const res=await del({id})
          console.log(id)
          alert(res.data.message)

        // }
      }catch(err){
        alert(err.message)
      }
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
                <div className="mk" >
         <div className="cons">
         <p style={{fontSize:"45px",textAlign:"center"}}>{room_available}</p>
          <span style={{fontSize:"25px",textAlign:"center"}}>Total available </span>
         </div>
         <div className="cons">
         <p style={{fontSize:"45px",textAlign:"center"}}>{room_unavailable}</p>
          <p style={{fontSize:"20px",textAlign:"center"}}>Total unavailable </p>
          {/* <h3>Total unavailable <span>{find.unavailable}</span></h3>  */}

         </div>
         <div className="cons">
         <p style={{fontSize:"45px",textAlign:"center"}}>{price}</p>
         <p style={{fontSize:"20px",textAlign:"center"}}>Room price </p>

         </div>
         </div>
        <br />
        <br />
        <br />
        <div className="btns">
        <button onClick={show} style={{zIndex:1000}}>edit room details</button>
        </div>
           
            </main>
        }  
        <section className='showsss'>
        <form ref={shows} className='shows ' onSubmit={(e)=>e.preventDefault()}>
        <div className="inp1">
        <div className="l">
            <input type="text"
            className='inp s'
            value={room_name}
            placeholder=''
            id='room_name'
            required
            onInput={(e)=>setroom_name(e.target.value)}
            />
            <label htmlFor="room_name" className='label'>Room_name</label>
            </div>
            <div className="l">
            <input type="text"
            value={room_price}
            className='inp s'
            placeholder=''
            id='room_price'
            required
            onInput={(e)=>setroom_price(e.target.value)}
            />
            <label htmlFor="room_price" className='label'>Room_price</label>
            </div>
            </div>

            <div className="inp1 position">
            <div className="l">
            <input type="text"
            value={available_room}
            className='inp '
            placeholder=''
            id='available_room'
            required
            onInput={(e)=>setavailable_room(e.target.value)}
            />
            <label htmlFor="available_room" className='label'>Available_room</label>
        <input onChange={(e)=>{setroom_img1(e.target.files)}} type="file" id='room_img1' multiple accept='image/*' />
        </div>

        </div>
        <div className="bt_cen" >
            <button onClick={submit} disabled={isLoading} >submit</button>
            <button onClick={()=>dele()}  >delete</button>
        </div>
    </form>
        </section> 
        </section> 
         )
}

export default room