import React from 'react'
import { useState as state,useEffect as eff } from 'react'
import img from '../../../img/12.jpg'
import { FaCloudUploadAlt } from 'react-icons/fa'
import Useauth from '../../../hooks/Useauth'
import { useGetPostQuery as get} from '../../../features/currentslice'
import { format } from 'date-fns'
import { useUpdateUserMutation as upds ,useUpdimgsMutation as updimgs} from '../../../features/currentslice'
// import { useUpdimgMutation as updimgs} from '../../../api/logslice'
  import { usePostsMutation as pos } from '../../../b/ap'
    const profile = () => {
        const{data,isSuccess,isLoading,isError,error}=get('',{
          pollingInterval:1000,
          refetchOnFocus:true,
          refetchOnMountOrArgChange:true
        })
        const{id}=Useauth()
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
        const [img,setimg]=state("")
        const [ids,setids]=state("")
        const [updall]=upds()
        const [upos]=pos()
        const [updimg]=updimgs()
        const [imgs,setimgs]=state('')
        const [view,setview]=state('')

        let content;

        if(isLoading){
            content=( <div className='load_parent'>
              <div className="loader"></div>
        
              </div>)
          }
         
        //   else if(isError){
        
        //     return <p>connection timeout</p>
        //   }else if(error){
        //       return <p>{error.data}</p>
        //     }

        eff(()=>{
            
            
            if(isSuccess){
            const mans=async()=>{

            const{ids,entities}=data
            const user= ids.map(userId=>{
                const all=entities[id]
                setfirstname(all.firstname)
                setlastname(all.lastname)
                setpassword(all.password)
                setpassword_con(all.password)
                setphone_no(all.phone_no)
                setusername(all.username)
                setdate(new Date( all.date))
                setgender(all.gender)
                setimg(all.image)
                setids(all.id)
                console.log(all.image)
            })
        }
        mans()
    }
        },[isSuccess,data])

        
  

        const births=(e)=>{
            setgender(e.target.value)
            // setdate(e.target.value)
        }
        const body={
          id:id,
          firstname,
          lastname,
          password,
          phone_no,
          username,
          date,
          gender,
          image:imgs.name
        }
        const submit=async()=>{
          try {
    
            const formdata = new FormData();
            formdata.append('file', imgs); // Add the file
            formdata.append('firstname', firstname);
            formdata.append('lastname', lastname);
            formdata.append('phone_no', phone_no);
            formdata.append('gender', gender);
            formdata.append('username', username);
            formdata.append('date', date);
            formdata.append('password', password);
    
            const response = await updimg({formdata,id});
            // const response = await upos({formdata,id});
            console.log("Response:", response);
    
        } catch (err) {
            console.error("Error submitting form:", err);
        }
        }

        
  return (
    <section className='sec_2'>
       {isLoading&&
       <>
       {content}
       </>
       }
        {
            isSuccess&&
<>
    <div className="loq">

    <img className='imq' src={view?view:`http://localhost:3500/images/${img}`} alt="" width={"150px"} height={'150px'} />
    
    <input type="file" 
     hidden
     name='file'
     accept='image/*'
     id='img'
     onChange={(e)=>{
      setimgs(e.target.files[0])
      setview(URL.createObjectURL(e.target.files[0]))

      }}
     />   

    <label className='imgss' htmlFor="img"><FaCloudUploadAlt style={{fontSize:"25px"}} color='rgba(32, 183, 253, 0.96)'/></label>
    </div>

    <main className='form_reg ' >
    
    <form className="regs" onSubmit={(e)=>e.preventDefault()} encType='multipart/form-data' >
    
    <div className="all">
      <div className="form1 down">
      <div className="l">

      <input type="text"
      className='inp sop'
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
      className='inp sop'
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
      className='inp sop'
      placeholder=''
      id='phone_no'
      required
      onInput={(e)=>setphone_no(e.target.value)}
      />
      <label htmlFor="phone_no" className='label'>phone_no</label>
      
      </div>
      <br />
      <div className="none">
      <select name="" id="" className='selects' >
        <option value="">select--</option>
        <option value="male">male</option>
        <option value="female">female</option>
    </select>
      {/* <label htmlFor="male">male
         <input 
         value={"male"}
         onChange={(e)=>births(e)} type="radio" id='male' name='gender' />
    </label>
      
      <label htmlFor="female">female
        <input
         value={"female"}
         onChange={(e)=>births(e)} type="radio" id='female' name='gender' />
      </label> */}
      </div>
      </div>
      
      <div className="form1 s3">
      <div className="l">
      <input type="text"
      className='inp sop'
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
      className='inp sop'
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

      <select name="" id="" className='selects' >
        <option value="">select--</option>
        <option value="male">male</option>
        <option value="female">female</option>
    </select>
</div>
      </div>
      
      </div>
      
      <div className="center_btn">
      <button className='btn_form' onClick={submit}>submit</button>
      </div>
      <br />
    </form>

    </main>
    </>
        }
    </section>
  )
}

export default profile