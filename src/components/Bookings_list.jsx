import React from 'react'
import { Link } from 'react-router-dom'
import { useState  } from 'react'
const Bookings_list = () => {

  const [list,setlist]=useState([
    {
      id:1,
      date:2022,
      checkout:203,
      username:"suleiman",
      phone_no:"09122334",
      room:['lexuery',"interior"],
      state:"kano",
    },
    {
      id:2,
      date:2021,
      checkout:2021,
      room:['lexuery',"interior"],
      username:"kaita",
      phone_no:"09122334",
      state:"katsina",
    },
    {
      id:3,
      date:2022,
      checkout:2023,
      room:['lexuery'],
      username:"yusuf",
      phone_no:"09122334",
      state:"kaduna",
    },
  ])
  let content
  const [search,setsearch]=useState("")

  const filter=list.filter(name=> name.username.toLowerCase().includes(search.trim().toLowerCase())||name.id.toString().includes(search.trim()))

  
     filter.length? content=(filter.map(user=>(
    
        <tr>

    <td>{user.id}</td>
    <td>{user.date}</td>
    <td>{user.checkout}</td>
    <td>{user.username}</td>
    <td>{user.room.toString().replaceAll(' ,').replace(' ,')}</td>
    <td className='non'>{user.phone_no}</td>
    <td className='non'>{user.state}</td>
  </tr>

      ))
    
  ):content=<p className='search_pa' style={{textAlign:"center",position:"relative",top:"60px",left:"10px",width:"100%"}}>not found</p>
    


  return (
    <main className='search_list'>
      <div className="ser">
    <input type="search"
    className='search_inp'
    id='search'
    placeholder='search'
    value={search}
    onInput={(e)=>setsearch(e.target.value)}
    />
    {/* <label htmlFor="search" className='labels'>search</label> */}
    </div>
      <table className='table'>
        <thead>
       
        <th>Userid</th>
        <th>check in </th>
        <th> checkout date</th>
        <th> username</th>
        <th > Room</th>
        <th className='non'> Phone number</th>
        <th className='non'>state</th>
        </thead>
          
          {content}
      </table>
      </main>
  )
}

export default Bookings_list