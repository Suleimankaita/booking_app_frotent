import React from 'react'
import { FaBookmark } from 'react-icons/fa'
import { Bar,Bubble,Pie,Line,Doughnut } from 'react-chartjs-2';
import usechart from "./chartData"
import Useauth from '../hooks/Useauth';
import { useState as state ,useEffect as eff} from 'react';
import { useGetPostQuery as get } from '../features/currentslice';
import { useUpdateUserMutation } from '../features/currentslice';
import Userlist from './Userlist';
import Socialmedia from './Socialmedia';
import opt from '../hooks/options';
import Calendar from 'react-calendar/dist/cjs/Calendar.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ArcElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    plugins,
  } from 'chart.js';
  import zoomPlugin from "chartjs-plugin-zoom";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ArcElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    zoomPlugin
  );

  


const UserDash = () => {

  const {username,status,id}=Useauth()

  const [view,setview]=state([])

  const {dat}=usechart()
  const [ups]=useUpdateUserMutation()

  const {
    data:da,
    isLoading,
    isSuccess,
    isError,
    error
  }=get()

  const [ma,setma]=state([])

      eff(()=>{
      
        // console.log("mans")

        // setTimeout(() => {
let con;
          if(isSuccess){
            setTimeout(() => {
              const man=da.entities[id].transaction.map(po=>{
                con=po.amount
                console.log(po.amount)
                return  setma(po)
                // console.log(po.amount)
              })
      
            }, 1000);
            
          }
        
    },[isSuccess,da])
    
  const transaction={
    id:id,
    amount:100,
    date:new Date().toDateString()
  }

  

    const {data,datas,pie,lines,line2,users,userlength,Totalamount,amount,Totaltransaction,dates,setdates,usersl,bookings,paid}=usechart()
    
    const datetime=new Date().toDateString()

  const {opt2,options,options2,optionss}=opt()


    const pay=async()=>{
      ups({transaction,id})
      // console.log(transaction)
    }

    
  return (
    <article className='User_section'>
      
      <div className="container">

       {/* <p>{JSON.stringify(status)}</p>    */}
       
        {/* <div className="con1 cx1 ">
       
        <div className="view_status">
       
            <h1>Total  bookings</h1>
       
            <span>0</span>
       
        </div>
    <Line  data={data} options={options} />

        </div>
         */}
        <div className="con1 cx1 ">
       
        <div className="view_status">
       
            <h1>Total  bookings</h1>
       
            <span>30</span>
       
        </div>
    <Line  data={line2} options={options} />

        </div>
        
        <div className="con1 cx2">
        <div className="view_status">
            <h1>Total  transactions</h1>
            <span>{amount>=1000000?`${Number(amount).toLocaleString()}m`:amount>999?`${Number(amount).toLocaleString()}k`:Number(amount)||0.00}</span>
        </div>
        <Bar data={bookings} options={options}/>
        </div>
        
        <div className="con1 cx4">
        <div className="view_status">
            <h1>Total  paids</h1>
            <span>{Number(paid||0)}%</span>
        </div>
            <Bar data={lines} options={options} width={"300px"}  />

        </div>
        
        <div className="con1 cx3">
        <div className="view_status">
            <h1>Total Users</h1>
            <span>{userlength}</span>
        </div>
            <Line data={users} options={options} width={"100px"}  />

        </div>

      </div>

      <div className="charts_con">
      {/* <div className="chart-container">

      </div> */}
      {/* <input type="date"
      value={dates}
        className="datepicker-input"
      onChange={(e)=>setdates(e.target.value)}
      /> */}
       {/* <Calendar  onChange={(e)=>setdates(e.target.value)} value={dates} /> */}
    <div className="alls">
      
      <div className="charts">
        <h1>{datetime}</h1>
       <Line height={"100%"} data={lines} options={opt2}
        />

      </div>


      {/* Social Media followers  */}
      <Socialmedia/>
      
      {/* Userlist Component  */}
   <main className='userli' >
   <Userlist/>
   </main>

      </div>
      
      </div>

    </article>
  )
}

export default UserDash
