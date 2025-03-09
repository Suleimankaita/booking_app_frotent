import React from 'react'
import userhandle from '../../hooks/Userhandle'
import { selectAll } from '../../features/currentslice'
import { useSelector as selects } from 'react-redux'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUpdateUserMutation } from '../../features/currentslice'
const Employer_Userlist = () => {

    const select=selects(selectAll)

    const [ups]=useUpdateUserMutation()



    const{list,users,setusers,employee,setemployee,change,setchange}=userhandle()
    const [check,setcheck]=useState(false)
    const [search,setsearch]=useState('')
    let content;
    let searchcontainer;

    const checks=(id)=>{
        // setcheck(prev=>!prev)
        const mp=select.map(us=> us.id === id.id?{...us, active:!us.active}:us)
        console.log(id)
        // setusers(mp)
        if(change==="UserList") return setusers(mp)
        
        if(change==="employersList") return setemployee(mp)
    }
    const checks2=(id)=>{
        // setcheck(prev=>!prev)
        const mp=employee.map(us=> us.id === id.id?{...us, active:!us.active}:us)
        console.log(id)
        
         return setemployee(mp)
    }

    
        searchcontainer=(
        <input type="text"
        style={{zIndex:"1000px"}}
        className='searchinp'
        value={search}
        placeholder='search'
        onInput={(e)=>setsearch(e.target.value)}
        />

        )


        const all=users.filter(name=> (name.username).toLowerCase().includes(search))

        console.log(all)
        all.length?content=all.map(user=>(
            
            <tr key={user.id}>
                <td className='fs'>
                <Link to={`${user.id}`} className='sbs'>
                    
                    {user.username}
                </Link>
                    </td>
                <td className='td_none'>{user.roles.toString().replace(' ,').replaceAll(' ,')}</td>
                <td className='fs'>{user.date}</td>
                <td>
 <label className='checks' htmlFor={`${user.id}`}>
      
       <input className='check' type="checkbox"
       checked={user?.active}
    //    onChange={()=> ups({...user,active:!user.active})}
    onChange={()=>ups(
        {...user,active:!user.active})}

       id={`${user.id}`}
       />
            </label>
                </td>
            </tr>
        
    )):content=<p className='search_pa' style={{textAlign:"center",width:"100%",}}>User is not exist</p>


   



  return (
    <div className='userdetails'>
     
        <table className='table'>
        <div style={{transform:"translate(20px,-60px)",zIndex:'1000px'}} className="s">
            
            {searchcontainer}
            </div>

            <thead>
        <th>Username</th>
            <th className='td_none '>roles</th>
            <th  className="sb">date/sign</th>
            <th className="sb">Suspendend</th>
            </thead>
        {content}
        </table>

    {/* </div> */}
    </div>

  )
}

export default Employer_Userlist

