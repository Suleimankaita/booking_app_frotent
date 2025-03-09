import React from 'react'
import { useState as state ,useEffect as eff} from 'react'
import { useLoginMutation as logs} from '../api/logslice';
import { useLocation as loc,useNavigate as nav, useLocation } from 'react-router-dom';
import { useDispatch as dis } from 'react-redux';
import { setdetails } from '../features/setcredentials';

const login = () => {

const [username,setusername]=state('')
    const [password,setpassword]=state('')
    const [errorstatus,seterrorstatus]=state('')
    const [forbideen,setforbideen]=state(false)
    const [forb,setforb]=state('')
    const disp=dis()
        const [log,{isLoading,isSuccess,error,isError}]=logs()
        const location=loc()
        const navigate=nav()
    
        eff(()=>{
        if(isSuccess){
            navigate('/')
        }
    },[isSuccess,navigate])

    const logins=async()=>{
    
            try{
                    const man=await log({username,password})
                    console.log(man.data.accesstoken)
                    await disp(setdetails(man.data.accesstoken))
                // navigate(froms,{replace:true})
    
            }catch(err){
                // console.log(err.time)
                // console.log(error.data.time)
                if(error.status===403){
                    console.log(error.data.time)
                    setforbideen(true)
                    setforb(error.data.time)
                }else{
                    setforb('')
                    setforbideen(false)
                }
            }
    
        }
    

        // eff(()=>{
        //     if(error.status===403){
        //         console.log(error.data.time)
        //         setforbideen(true)
        //         setforb(error.data.time)
        //     }else{
        //         setforb('')
        //         setforbideen(false)
        //     }
    
            
            
        // },[error])
        
        eff(()=>{
            if(isError){ return seterrorstatus(error.data.message)
                }
            else{
                seterrorstatus("")
            }
            
            
        },[isError])


  return (
        <main className='form_reg'>
            <h1>{errorstatus} {forbideen}</h1>
    <form onSubmit={(e)=>e.preventDefault()}>
    <div className="l">
      <input type="text"
      className='inp'
      value={username}
      placeholder=''
      required
      onInput={(e)=>setusername(e.target.value)}
      />
      <label htmlFor="firstname" className='label'>username</label>

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
    <button onClick={logins} disabled={forbideen}>login</button>
    </form>
    </main>
  )
}

export default login