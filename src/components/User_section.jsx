import React from 'react'
import { useParams as params } from 'react-router-dom'
import { useSelector as select } from 'react-redux'
import { selectById,selectAll } from '../features/currentslice'
import { useEffect as eff , useState as state} from 'react';
import img1 from "../img/12.jpg"
import { Link } from 'react-router-dom';

const User_section = () => {
    const sel=select(selectAll)
    const [details,setdetails]=state("full_details")
    const [all,setall]=state(["full_details","transaction"])
    const [img,setimg]=state()
    const {id}=params();
    let content
    const views=select(state=> selectById(state,id))

    eff(()=>{
        if(views){
            if(!views.image){
                setimg(img1)

            }else
             if(views?.image){
                console.log(views)
                setimg(`http://localhost:3500/images/${views.image}`)

            }
        }
    },[views])

    // eff(()=>{
        if(views){

            if(details==="full_details"){
               content= (<div className="person" >
                                <div className="img_sec">
                                    <img src={img} alt="" width={"250px"} height={"250px"} />
                                    <br />
                                    <br />
                                    <br />
                                    <button ><Link to={`Editpage/${views.id}`}> Edit profile</Link></button>
                                </div>
                                <div className="person_details">
                                <span>firstname : {views.firstname}</span>
                                <span>lastname  : {views.lastname}</span>
                                <span> username : {views. username}</span>
                                <span>phone_no  : {views.phone_no}</span>
                                </div>
                                <div className="person_details">
                                <span>roles : {views.roles.toString().replace(" ,").replaceAll(" , ")}</span>
                                <span>gender : {views.gender}</span>
                                <span> date of birth : {views.date}</span>
                                <span>active : {views.active.toString()}</span>
                                </div>
                                
                                </div>)
                    }else if(details==="transaction"){

                       content= (<div className='mans'>
                                <div className="img_sec mp">
                                    <img src={img} alt="" width={"250px"} height={"250px"} />
                                    <br />
                                    <br />
                                    <br />
                                    <button ><Link to={`Editpage/${views.id}`}> Edit profile</Link></button>
                                </div>
                        <div className="person" >
                        <div className="end">
                                <table className='ml'>
                                    <thead>
                                    <th>transactions id</th>
                                    <th>transactions</th>
                                    <th>time</th>
                                    </thead>
                                    {views.transaction.map(transaction=>(
                                <tr style={{transform:"translateY(-10px)"}}>
                
                                    <td>
                                        {transaction._id}
                                        </td>
                                    <td>
                                    &#8358;{transaction.amount}
                                        </td>
                                        
                                        <td>{transaction.date}</td>
                                    </tr>
                                    ))}
                                        
                                </table>
                                </div>
                                </div>
                                </div>
                                ) 
                    }
                
            }

            const selects=(
                <select onChange={(e)=>setdetails(e.target.value)}>
                   {
                    all.map((opt,_)=>(
                        <option key={_} value={opt}>{opt}</option>
                    ))
                   }
                </select>
            )

    return (

        <div style={{width:"100%",height:"100vh"}}>
            <>
            <div className="sl">
            {selects}
            </div>
            {content}
            
            </>
        </div>

    )
}

export default User_section