import React from 'react'
import { useState as state ,useEffect as eff} from 'react'
import { useRegisterNewuserMutation as reg,} from '../features/currentslice';
import { useLoginMutation as logs} from '../api/logslice';
import { useLocation as loc,useNavigate as nav, useLocation } from 'react-router-dom';
import { useDispatch as dis } from 'react-redux';
import { setdetails } from '../features/setcredentials';
const form = () => {
    const [firstname,setfirstname]=state('')
    const [lastname,setlastname]=state('')
    const [username,setusername]=state('')
    const [password,setpassword]=state('')
    const [gender,setgender]=state('')
    const [phone_no,setphone_no]=state('')
    const [date,setdate]=state('')
    const [password_con,setpassword_con]=state('')
    const [status,setstatus]=state("")
    const [num,setnum]=state("")
    const [error,seterror]=state("")
    const [addpost,]=reg()
    const [log,{isLoading,isSuccess}]=logs()
    const location=loc()
    const navigate=nav()
    const disp=dis()
    const froms=location?.state?.pathname?.from||'/'


    eff(()=>{
        if(isSuccess){
            navigate("/")
        }
    },[isSuccess,navigate])


    const births=(e)=>{
        setgender(e.target.value)
        // setdate(e.target.value)
    }

    const numbers=Number(num)

    const obj={
        firstname,
        lastname,
        username,
        password,
        gender,
        date,
        phone_no,
    amount:numbers,status:"sucess"
    }

    const login=async(list)=>{

        try{
                const res=await log({username:list.username,password:list.password})
                await disp(setdetails(res.data.accesstoken)).unwrap()
            // navigate(froms,{replace:true})
            // navigate("/")
            console.log(res)
        }catch(err){

        }

    }

    const submit=async()=>{
        try{
            // if(password==="") return
            // password===password_con? setstatus("correct"):setstatus("incorrect")

            const res= await addpost(obj)
            await login(obj)
            console.log(obj)


        }catch(err){
            console.log(err)
        }
    }

    eff(()=>{
        if(password_con==="") return setstatus("")
        password===password_con? setstatus("correct"):setstatus("incorrect")
        console.log(date)
        console.log(new Date().toISOString().split('T')[0]===date)

    },[password_con,num])



    return (
        <main className='form_reg'>
    <form onSubmit={(e)=>e.preventDefault()}>
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
        <div className="l">
      <input type="number"
      value={num}
      className='inp'
      placeholder=''
      id='num'
      required
      onInput={(e)=>setnum(e.target.value)}
      />
      <label htmlFor="num" className='label'>num</label>
      
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

<div className="l">
      <input type="text"
      id='password_con'
      value={password_con}
      className='inp'
      placeholder=''
      required
      onInput={(e)=>setpassword_con(e.target.value)}
      />

<label htmlFor="password_con" className='label'>password_con</label>


</div>
        <p>{status}</p>
        
        <input type="date"
        className='date'
        style={{padding:10}} 
        value={date}
        onChange={(e)=>setdate(e.target.value)}
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

    </main>
  )
}

export default form
