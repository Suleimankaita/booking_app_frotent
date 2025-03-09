import React from 'react'
import { useState ,useEffect} from 'react'
import { useSelector as selector } from 'react-redux'
import { selectById } from '../features/currentslice'
import { useParams as params } from 'react-router-dom'

const Edit_user = () => {

    const {id}=params()

    const views=selector(state=>selectById(state,id))


    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [dateofbith,setdateofbith]=useState('')
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [gender,setgender]=useState('')
    const [phone_no,setphone_no]=useState('')
    const [roles,setroles]=useState([])
    const [addroles,setaddroles]=useState(["employee","User","Admin"])
    useEffect(()=>{
if(views){
    setroles(views.roles)
        setfirstname(views.firstname)
        setlastname(views.lastname)
        setdateofbith(views.date)
        setgender(views.gender)
        setusername(views.username)
        setpassword(views.password)
        setphone_no(views.password)
    }
    
    },[views])
    
    useEffect(()=>{
        // if(views){
            console.log(views.gender)
        // }
    },[roles])

    const births=(e)=>{
        setgender(e.target.value)
    }

    const submit=async()=>{

    }
    
  return (
     <div className='form_reg'>
        {views&& 

            <form  onSubmit={(e)=>e.preventDefault()} style={{position:"relative",top:"-70px"}}>
            {/* <input type="text"
            placeholder='firstname'
            value={firstname}
            onInput={(e)=>setfirstname(e.target.value)}
            />
            <input type="text"
            placeholder='lastname'
            value={lastname}
            onInput={(e)=>setlastname(e.target.value)}
            />
            <input type="text"
            placeholder='username'
            value={username}
            onInput={(e)=>setusername(e.target.value)}
            />
            <input type="text"
            placeholder='firstname'
            value={firstname}
            onInput={(e)=>setfirstname(e.target.value)}
            />
            <select size={3} defaultValue={roles}  multiple onChange={(e)=>{
                const man=Array.from( 
                    
                    e.target.selectedOptions,
                    opt=>opt.value

                )
                setroles(man)
            }} >
                {addroles.map((role,_)=>(
                    <option  value={role} key={_}>{role}</option>
                ))}
            </select> */}
               <div className="all">
      <div className="form1 down">
      <div className="l">

      <input type="text"
      className='inp'
      value={firstname}
      placeholder=''
      id='firstname'
      required
      onInput={(e)=>setfirstname(e.target.value)}
      />
      <label htmlFor="firstname" className='label'>firstname</label>
      </div>
        <div className="l">
      <input type="text"
      value={lastname}
      className='inp'
      placeholder=''
      id='lastname'
      required
      onInput={(e)=>setlastname(e.target.value)}
      />
      
      <label htmlFor="lastname" className='label'>lastname</label>
      </div>
        <div className="l">
      <input type="text"
      value={phone_no}
      className='inp'
      placeholder=''
      id='phone_no'
      required
      onInput={(e)=>setphone_no(e.target.value)}
      />
      <label htmlFor="phone_no" className='label'>phone_no</label>
      
      </div>
      <div className="none">

      <label htmlFor="male">male
         <input 
         value={"male"}
         onChange={(e)=>births(e)} type="radio" id='male' name='gender' />
    </label>
      
      <label htmlFor="female">female
        <input
         value={"female"}
         onChange={(e)=>births(e)} type="radio" id='female' name='gender' />
      </label>
      </div>
      </div>
      
      <div className="form1">
      <div className="l">
      <input type="text"
      className='inp'
      value={username}
      id='username'
      placeholder=''
      required
      onInput={(e)=>setusername(e.target.value)}
      />
      <label htmlFor="username" className='label'>username</label>

</div>
<div className="l">
      <input type="text"
      value={password}
      placeholder=''
      required
      className='inp'
      id='password'
      onInput={(e)=>setpassword(e.target.value)}
      />
<label htmlFor="password" className='label'>password</label>

</div>
<select size={3} defaultValue={roles}  multiple onChange={(e)=>{
                const man=Array.from( 
                    
                    e.target.selectedOptions,
                    opt=>opt.value

                )
                setroles(man)
            }} >
                {addroles.map((role,_)=>(
                    <option  value={role} key={_}>{role}</option>
                ))}
            </select> 
{/* <div className="l">
      <input type="text"
      id='password_con'
      value={password_con}
      className='inp'
      placeholder=''
      required
      onInput={(e)=>setpassword_con(e.target.value)}
      />

<label htmlFor="password_con" className='label'>password_con</label> */}


{/* </div> */}
        
        <input type="date"
        className='date' 
        value={dateofbith}
        onChange={(e)=>setdateofbith(e.target.value)}
        />
      <div className=" inp_gender">

<label htmlFor="male">male
   <input 
   value={"male"}
   onChange={(e)=>births(e)} type="radio" id='male' name='gender' />
</label>

<label htmlFor="female">female
  <input
   value={"female"}
   onChange={(e)=>births(e)} type="radio" id='female' name='gender' />
</label>
</div>
      </div>
      
      </div>
      
      <div className="center_btn">
      <button className='btn_form' onClick={submit}>submit</button>
      </div>
            </form>
             
        }
</div>
  )
}

export default Edit_user
