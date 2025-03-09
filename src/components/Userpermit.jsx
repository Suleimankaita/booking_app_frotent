import React from 'react'
import userhandle from '../hooks/Userhandle'
import { selectAll } from '../features/currentslice'
import { useSelector as selects } from 'react-redux'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useUpdateUserMutation,useGetPostQuery,useGetsearchQuery } from '../features/currentslice'
const Userpermit = () => {


    const [m,setm]=useState([])

 const socket=io('http://localhost:3500/')
 let ismounted=true;

    useEffect(()=>{
        if(ismounted){

        socket.on("connection",(io)=>{
            console.log(io.id)
        })
        socket.on("data",(data)=>{
            console.log(data)
            setm(data)
        })
    }

        return()=>{
            ismounted=false
            socket.disconnect("connection",(s)=>{
                console.log('disconnect')
            })
        }

    },[socket])

    const select=selects(selectAll)
    let searchs;
    const [ups]=useUpdateUserMutation()
    const {
        data,
        isSuccess,
        isLoading,
        isError,
        error
    }=useGetPostQuery('userpermit',{
        pollingInterval:10000,
        refetchOnFocus:true,
        refetchOnMountOrArgChange:true
    })
    const [search,setsearch]=useState('')
    const [page,setpage]=useState(10)
    const {
        data:da,
        // isSuccess
    }=useGetsearchQuery('search',{
        search,
        page,
        skip: !search,
    })


    const{list,users,setusers,employee,setemployee,change,setchange}=userhandle()
    const [check,setcheck]=useState(false)
    // const [result,setresult]=useState([])
    let content;
    let searchcontainer;

    // console.log(da)

    const [active,setactive]=useState(true)
    const [con,setcon]=useState()

    const submit=(id,active)=>{

        // console.log(id)
        // setactive(prev=> !prev)

        // try{
            // ups({id,active:!active.active})
            // console.log(id)
            socket.emit("ups",{id,active:!active.active})

        // }catch(err){
        //     console.log(err.message)
        // }
    }

 

    const checks2=(id)=>{
        // setcheck(prev=>!prev)
        const mp=employee.map(us=> us.id === id.id?{...us, active:!us.active}:us)
        
         return setemployee(mp)
    }



    if(isLoading){
        return <div className='load_parent'>
      {/* <div className="loader"></div> */}
      <div className="loader"></div>

      </div>
    }

    if(isSuccess){

        // const {ids,entities}=data
        
        //     const m=ids.map(id=>{
                
        //         return searchs=entities[id]
                
        //     })
        // console.log(m)
        

    
    if(change==="UserList"){
        searchcontainer=(
        // <input type="text"
        // style={{zIndex:"1000px"}}
        // // className='searchinp'
        // value={search}
        // placeholder='search'
        // onInput={(e)=>setsearch(e.target.value)}
        // />

        <div className="ser">
        <input type="search"
        className='search_inp'
        id='search'
        style={{zIndex:"1000px"}}
        // className='searchinp'
        value={search}
        placeholder='search'
        onInput={(e)=>setsearch(e.target.value)}
        />
        {/* <label htmlFor="search" className='labels'>search</label> */}
        </div>
        )
       

        const all=m.filter(name =>{
            // console.log(name.User.includes("User"))
           return name.User==="User"
        //    (name.username).toLowerCase().includes(search.trim().toLowerCase())||name.id.includes(search.trim())
        })
        const b=all.filter(name=>{return (name.username).toLowerCase().includes(search.trim().toLowerCase())||name.id.includes(search.trim())})
           console.log(all)
           b.length?content=b.map(user=>{
            console.log(user._id)
           return (
            <tr key={user._id}>
                <td className='fs non'>
                <Link to={`User/${user._id}`} className='sbs'>
                    
                    {user._id}
                </Link>
                    </td>
                <td className='fs '>
                <Link to={`User/${user._id}`} className='sbs'>
                    
                    {user.userId}
                </Link>
                    </td>
                <td className='fs'>
                <Link to={`User/${user._id}`} className='sbs'>
                    
                    {user.username}
                </Link>
                    </td>
                <td className='td_none'>{user.roles.toString().replace(' ,').replaceAll(' ,')}</td>
                <td className='fs'>{user.date.split("T")[0]}</td>
                <td className='non'>
                    <label className={user.active?"checks ":'check2'} htmlFor={`${user.id}`}>  
                    <input className='check' type="checkbox"
                    id={`${user._id}`}
                        checked={user?.active}
                         onChange={()=> submit(user._id,user)}
                    />
                    </label>
                </td>
            </tr>
        
    )}):content=<p className='search_pa' style={{textAlign:"center",width:"100%",}}>User is not exist</p>
    

}

    else if(change==="employersList"){
        searchcontainer=(
            <input type="text"
            style={{zIndex:"1000px"}}
            value={search}
            placeholder='search'
        className='searchinp'
            onInput={(e)=>setsearch(e.target.value)}
            />
    
            )
        const all=employee.filter(name=> (name.username).toLowerCase().includes(search))
                all.length?content=all.map(user=>(
            
            <tr key={user.id}>
                <td className='fs'>{user.id}</td>
                <td className='fs'>{user.username}</td>
                <td className='td_none'>{user.roles.toString().replace(' ,').replaceAll(' ,')}</td>
                <td className='fs'>{user.date.split("T")[0]}</td>
                <td>
 <label className='checks non' htmlFor={`${user.id}`} >
      
       <input className='check' type="checkbox"
       checked={user.active}
       onChange={(e)=> checks2(user)}
       id={`${user.id}`}
       />
            </label>
            
                </td>
            </tr>
        
    )):content=<p className='search_pa' style={{textAlign:"center",width:"100%",}}>employee is not exist </p>
    }
    }
 
    const selectss=(
    <select onChange={(e=>setchange(e.target.value)) }className={"sb2"} style={{width:"20%",height:"20px",position:"relative",top:"25px"}} >
        {
            list.map((user,_)=>(
                <option key={_} value={user}>{user}</option>

            ))
            }
    </select>
)



  return (
    <div className='userdetails'>
        <div  style={{width:"100%",padding:"10px",display:"flex",justifyContent:"space-between"}}>
           
            {searchcontainer}
            {/* {selectss} */}

        </div>
     
        <table className='table' style={{marginBottom:"100px"}}>
        {/* <div style={{transform:"translate(20px,-60px)",zIndex:'1000px'}} className="s">
            
            {searchcontainer}
            </div> */}

            <thead>
        <th className='non'>id</th>
        <th >userid</th>
        <th>Username</th>
            <th className='td_none '>roles</th>
            <th  className="sb">date/sign</th>
            <th className="sb non">active</th>
            </thead>
        {content}
        </table>

    {/* </div> */}
    </div>

  )
}

export default Userpermit
