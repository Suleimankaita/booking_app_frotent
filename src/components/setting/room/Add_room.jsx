import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate as navigate } from 'react-router-dom'
import { useAdd_roomMutation } from '../../../api/logslice'
const Add_room = () => {

    const [room_name,setroom_name]=useState('')
    const [room_price,setroom_price]=useState('')
    const [available_room,setavailable_room]=useState('')
    const [room_img1,setroom_img1]=useState([])
    const [room_img2,setroom_img2]=useState([])
    const [add_room,{isLoading,isSuccess}]=useAdd_roomMutation()
    const navi=navigate()


    const submit=async()=>{

        try{

            const formdata=new FormData()
            formdata.append('room_name',room_name)
            formdata.append('room_price',Number(room_price))
            formdata.append('available_room',Number(available_room))
            Object.keys(room_img1).forEach(key=>{
                // console.log(room_img1[key].name)
                // console.log(room_img1.item())
             formdata.append('file',room_img1.item(key))
            console.log(room_img1)
            })
            const res=await add_room(formdata)
            console.log(res.data)

        }catch(err){
            console.log(err.message)
        }

    }
    useEffect(()=>{
        if(isSuccess){
            alert("new item is added")
            return navi('/Roomstatus')
        }
    },[isSuccess,navi])

  return (
    <form className='forms2' onSubmit={(e)=>e.preventDefault()}>
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
        <input onChange={(e)=>setroom_img1(e.target.files)} type="file" id='room_img1' multiple accept='image/*' />
        </div>

        </div>
        <div className="bt_cen">
            <button onClick={submit} disabled={isLoading} >submit</button>
        </div>
    </form>
  )
}

export default Add_room