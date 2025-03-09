import React from 'react'
import employeeChart from './employeeChart'
import Socialmedia from '../Socialmedia'
import Userlist from '../Userlist'
const employeeDash = () => {
    const {bookline,transactionsline,Line1,Line2,lines,amount,userlength,Lines2}=employeeChart() 

    const datetime=new Date().toDateString()

  return (
    <main className='main_section'>

      {/* <div className="parant_chart_employee">

      <div className='employer_con1' >
        <h3>Total Bookings</h3>
        {bookline}
         {Line2} 
      </div>
      
      <div className='employer_con1' >
        <div className="flex_button">
      
      <h3>Total User </h3>
             <div className='dot'>
               <span></span> 
               <span></span> 
               <span></span> 
            </div> 

            </div>
        {transactionsline}
         {Line2} 
      </div> 

      <div className='employer_con1' >
      <div className="flex_button">

      <h3>Total transactions </h3>
            <div className='dot'>
               <span></span> 
               <span></span> 
               <span></span> 
            </div> 

            </div>
        {Line2}
      </div>

      </div> */}
      {Lines2}

      <div className="alls">
            
            <div className="charts" >
              <h1 style={{margin:"5px"}}>{datetime}</h1>
            
            <div style={{margin:"1px",height:"95%"}}>{Line1}</div>  
            <br />
            
            </div>


            {/* <Socialmedia/> */}

            <Userlist/>


      </div>

      {/* <div style={{width:"100%",height:"300px"}} 
      className="">

    </div> */}
    </main>
  )
}

export default employeeDash
