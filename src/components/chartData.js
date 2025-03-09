import { selectAll } from "../features/currentslice";
import React from 'react'
import { useSelector as select } from "react-redux";
import { useState as state ,useEffect as eff } from "react";
import { useGetPostQuery as get } from "../features/currentslice";
import Useauth from "../hooks/Useauth";
import overviewCharts from "./overviewCharts";
const chartData = () => {


    const {id}=Useauth()
    // const {alldates,arr}=overviewCharts()
    const datetime=new Date().toDateString()

    const {data:da,isSuccess,isLoading,isError,error}=get("getdata",{
      pollingInterval:1000,
      refetchOnFocus:true,
      refetchOnMountOrArgChange:true
    })

    // const [dates,setdates]=state(new Date().toISOString().split("T")[0])
//     const [dates,setdates]=state(new Date().toISOString().split("T")[0])
//     const [view,setview]=state()
//     const [userlength,usersetlength]=state()
//     const [Totaltransaction,setTotaltransaction]=state()
    const selects=select(selectAll)


//     const [dat,setdat]=state({
//       labels:[],
//       datasets:[{
//         label:"",
//         data:[],
//         borderColor:"blue",
//         borderWidth:2,
//         fill:true,
//         hoverOffset:3,  
//       }]
//     })
//     const [line,setline]=state({
//       labels:[],
//       datasets:[{
//         label:"",
//         data:[],
//         borderColor:"blue",
//         borderWidth:2,
//         fill:true,
//         hoverOffset:3,  
//       }]
//     })
//     const [line2,setline2]=state({
//       labels:[],
//       datasets:[{
//         label:"",
//         data:[],
//         borderColor:"blue",
//         borderWidth:2,
//         fill:true,
//         hoverOffset:3,  
//       }]
//     })
//     const [data,setdata]=state({
//       labels:[],
//       datasets:[{
//         label:"",
//         data:[],
//         borderColor:"blue",
//         borderWidth:2,
//         fill:true,
//         hoverOffset:3,  
//       }]
//     })
//     const [pie,setpie]=state({
//       labels:[],
//       datasets:[{
//         label:"",
//         data:[],
//         borderColor:"blue",
//         borderWidth:2,
//         fill:true,
//         hoverOffset:3,  
//       }]
//     })

//     const [user,setusers]=state({
//       labels:[],
//       datasets:[{
//         label:'',
//         data:[],
//         borderWidth:2,
//         fil:true,
//       }]
//     })

//     let con=[];
//     let create_date;
//     eff(()=>{



//         const mans=async()=>{
//           setTimeout(() => {
            
            
//           const ids=da.ids.map(p=>{return p})

//           const users=selects.map(v=>{return v.userId})
//           usersetlength(ids.length)
            

//           const totalSum = users.reduce((sum, user) => sum + user);


//     const usersWithPercentage = users.map((user) => {
//     const percentage = ((user.userId / totalSum) * 100).toFixed(2); 
//   return { ...user, percentage: `${percentage}%` }; 
// });

//   setview(usersWithPercentage)

//   const {ids:idss,entities}=da;
  
//   idss.map(usr=>{
//     const mn= entities[usr]
//     // console.log(mn)
//     create_date=mn.createdAt

//   })
  

//   const datess=da.entities[id].transaction.filter(date=> {return date.date===dates})
//           const amount=datess.map(amounts=> amounts.amount)
//           const date=datess.map(date=> {return date.date})
//           setTotaltransaction(amount.length)

     
          
//           setdata( {
//             labels: date,
//             datasets: [
//               {
//                 backgroundColor: " rgba(255, 255, 255, 0.12)",
//                 label: 'Transactions',
//                 data: amount,
//                 hoverOffset:9,
//               pointBorderColor: 'blue',

                
//                 // borderWidth: 4,
//               },
//             ],
//           })
      


//           setusers({
//             labels:create_date,
//             datasets:[{
//               label:'Users',
//               data:users,
//               pointRaduis:0,
//               borderWidth:2,
//               backgroundColor:'red',
//               fill:{
//                 above:"blue"
//               }
//             }]
//           })

//           setline( {
//             labels: alldates,
//             datasets: [
//               {
  //                 data: amount,
//                 label: 'Total booking',
//                 // backgroundColor: 'rgba(220, 220, 220, 0.93)',
              
//                 pointHighlightStroke: 'rgba(178, 61, 61, 0)',
//                 borderWidth: 4,
//                 // fill: true, // for Line chart
//                 borderColor: 'rgb(0, 123, 255)',
//                 pointHighlightFill: '#fff',
//                 pointHighlightStroke: 'rgba(151, 187, 205, 1)',
//                pointBackgroundColor: 'rgb(209, 37, 37)',
//               pointBorderColor: 'blue',
//               fill: {
//                 target: { value: 50 }, // Threshold value for filling
//                 above: 'rgba(0, 102, 255, 0.3)', 
//               },
//               pointRadius: 1,    
//               tension: 0.4, 
//               },
//             ],
//           })
//           setline2( {
//             labels: date,
//             datasets: [
//               {
//                 label: 'Transaction',
//                 data: amount,
//                 borderWidth: 2,
//                 fill: {
//                   above:'rgb(18, 131, 237)',
//                 }, 
//                 pointHighlightStroke: 'rgba(178, 61, 61, 0)',

//                 borderColor: 'rgba(151, 187, 205, 1)',
//                 pointHighlightFill: '#fff',
//                     pointHighlightStroke: 'rgba(151, 187, 205, 1)',
//                pointBackgroundColor: 'rgb(98.171875, 96.5, 203.5)',
//               pointBorderColor: 'rgb(98.171875, 96.5, 203.5)',
//               pointRadius:4,

//                   tension:0.4
//               },
//             ],
//           })
      
//           setpie( {
//             labels: date,
//             datasets: [
//               {
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                 hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                 label: 'Transactions',
//                 data: amount,
//                 borderWidth: 1,
//               },
//             ],
//           })
      

//           setdat({
//             labels:date,
//             datasets:[{
//               label:"",
//               data:amount,
//               label: 'My First dataset',
//                     backgroundColor: 'rgba(0, 105, 191, 0.66)',
//                     borderColor: 'rgba(220, 220, 220, 1)',
//                     pointBackgroundColor: 'rgba(220, 220, 220, 1)',
//                     pointBorderColor: '#fff',
//               borderWidth:2,
//               fill:true,
//               hoverOffset:3,  
//             }]
//           })
//         }, 1000);

//         }

        
     
//         mans()


//         // setTimeout(() => {
//         //   const man=da.entities[id].transaction.map(po=>{
//         //     con.push(po.amount)
            
//         //     setview(po)
  
//         //     // console.log(po)
//         //     // console.log(view)
            
            
//         //     console.log(con)
//         //     console.log(view)
//         //   })
//         // }, 1000);

//         // const interval = setInterval(mans, 5000); // Refresh data every 5 seconds
//         // return () => clearInterval(interval); // Cleanup interval on unmount

//     },[da,dates])
    



//      const datas = {
//         labels: ["mon","Tue","wed","thurs","fri","sat","sun"],
//         datasets: [
//           {
//             label: '',
//             data: [con],
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//           },

//         ],
//       };


//       //  const pie={
//       //   labels:[datetime],
//       //   datasets:[{
//       //       label:"Paid",
//       //       data:[con[0]],
//       //       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//       //       borderColor: 'rgb(108, 148, 226)',
//       //       borderWidth: 1,
//       //       height:"100px",
//       //       width:"100px",
//       //       hoverOffset:4
//       //   }]
//       // }




//   return {Totaltransaction,dat,dates,setdates,datas,pie,data,line,line2,user,userlength}
// }


let dates=[];
let alldates=[];
let datas;
let todayss;
let arr=[];
let amounte=[];
let todays_amount=[];
let als=[]
let isMounted=true 
// const [amounte,setamounte]=state()
const [amount,setamount]=state()
const [amounts,setamounts]=state()
const [Totalamount,setTotalamount]=state()
const [date,setdate]=state(new Date().toISOString().split("T")[0])

  const [users,setusers]=state(
    {
      labels:[],
      datasets:[
        {
          label:'',
          data:[],
          borderColor:"red",
          boderWidth:3,
          borderColor:["yellow",'blue','tomato','green'],
          hoverOffset:3,

        }
      ]
    }
  )
  
  const [bookings,setbookings]=state({
    labels:[],
    datasets:[
      {
        label:"",
        data:[],
        boderWidth:2,
        hoverOffset:4,
        borderColor:"red",
        backgroundColor:"blue"
      }
    ]
  })
  const [userlength,usersetlength]=state()

  const [book,setbook]=state({
    labels:[],
    datasets:[
      {
        label:"",
        data:[],
        boderWidth:2,
        hoverOffset:4,
        borderColor:"red",
        backgroundColor:"blue"
      }
    ]
  })
  const [lines,setlines]=state({
    labels:[],
    datasets:[{
      label:"",
      data:[],
      borderColor:"blue",
      borderWidth:2,
      fill:true,
      hoverOffset:3,  
    }] 
  })
  const [line2,setline2]=state({
    labels:[],
    datasets:[{
      label:"",
      data:[],
      borderColor:"blue",
      borderWidth:2,
      fill:true,
      hoverOffset:3,  
    }] 
  })
  const [transac,settransac]=state({
    labels:[],
    datasets:[{
      label:"",
      data:[],
      borderColor:"blue",
      borderWidth:2,
      fill:true,
      hoverOffset:3,  
    }] 
  })

  const [todays,settodays]=state({
    labels:[],
    datasets:[{
      label:"",
      data:[],
      borderColor:"blue",
      borderWidth:2,
      fill:true,
      hoverOffset:3,  
    }] 
  })
  let usersl=[]

  const [paid,setpaid]=state()
let createdAt=[];
  eff(()=>{
    const man=async()=>{
      if(isSuccess&&isMounted){

    const {ids,entities}=da


    const man=ids.map(id=>{
       
      const charts=entities[id]
      createdAt.push(charts.createdAt)
      // usersetlength([ids.length])
      usersl.push(charts.userId)
      console.log(createdAt)
      const userid=usersl.reduce((sum,total)=>{
        return sum+total
      })
      usersetlength(usersl.length)

      // console.log(userid)
      //  const ml=charts.map(po=>{
      //   })
        // usersetlength(userid)
       const tr=charts.transaction.map(date=>{
          amounte.push(date.amount)
          return date
        })
        // console.log(tr)
      setTotalamount(amounte.reduce((sum,amounts)=>{
        return sum+amounts
      }))
    })
  }
}
man()
return()=>{
  isMounted=false
}

  },[da])
  eff(()=>{
    const man=async()=>{
      setamounts('ma')
      // console.log(amounts)
      
    if(isSuccess&&isMounted ){

      const {ids,entities}=da
    
      const man=ids.map(id=>{
       
        const charts=entities[id]
        

        const tr=charts.transaction.map(date=>{
          amounte.push(date.amount)
          return date
        })
        console.log(tr)
        setTotalamount(amounte.reduce((sum,amounts)=>{
          return sum+amounts
        }))
        // arr=[]
          
          const maps=tr.filter(trans=>{
            // console.log(trans)
            return trans.date===date
          })
          
          
          
      //  maps.map(p=>)
        datas=maps.map(p=>{
          
        dates.push(p.time)
        arr.push(p.amount)
        alldates.push(p.date)
        todays_amount.push(p.amount)
      
      })
      if(maps.length){
        setamount(todays_amount.reduce((sum,amounts)=>{
          return  sum+amounts
        }))
        setpaid(amount%100)
      }
    })

    

    setlines({
      labels:alldates,
      datasets:[{
          label:'Userchart',
          data:arr,
          borderWidth: 2,
            backgroundColor: 'rgba(220, 220, 220, 0.93)',
              
                pointHighlightStroke: 'rgba(178, 61, 61, 0)',
                borderWidth: 4,
                // fill: true, // for Line chart
                borderColor: 'rgb(0, 123, 255)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(151, 187, 205, 1)',
               pointBackgroundColor: 'rgb(209, 37, 37)',
              pointBorderColor: 'blue',
              fill: {
                target: { value: 50 }, // Threshold value for filling
                above: 'rgba(0, 102, 255, 0.3)', 
              },
              pointRadius: 1,    
              tension: 0.4, 
              
    }]       
  }) 
    setline2({
      labels:alldates,
      datasets:[{
          label:'Userchart',
          data:arr,
          borderWidth: 2,
               fill: {
                above:'rgb(18, 131, 237)',}, 
              pointHighlightStroke: 'rgba(178, 61, 61, 0)',

              borderColor: 'rgba(151, 187, 205, 1)',
              pointHighlightFill: '#fff',
                  pointHighlightStroke: 'rgba(151, 187, 205, 1)',
              pointBackgroundColor: 'rgb(98.171875, 96.5, 203.5)',
            pointBorderColor: 'rgb(98.171875, 96.5, 203.5)',
            pointRadius:4,

                tension:0.4
    }]       }) 
    settransac({
      labels:dates,
      datasets:[{
          label:'Userchart',
          data:arr,
          borderColor: 'rgb(0, 123, 255)',
          backgroundColor:"rgb(0, 242, 255)",
          pointRadius:5,
          boderWidth:3,
          hoverOffset:7,
          fill: false,
    }]        
  })
  //   settodays({
  //     labels:alldates,
  //     datasets:[{
  //         label:'Userchart',
  //         data:todayss,
  //         borderColor: ['rgb(0, 123, 255)','rgb(0, 123, 255)'],
  //         backgroundColor:["rgb(0, 242, 255)",'rgb(179, 0, 255)'],
  //         pointRadius:5,
  //         boderWidth:3,
  //         hoverOffset:7,
  //         fill: false,
  //   }]        
  // })
    settodays({
      labels:dates,
      datasets:[{
          label:'',
          data:arr,
          borderColor: ["rgb(85, 255, 0)",'rgb(0, 255, 208)'],
          backgroundColor:["rgb(85, 255, 0)",'rgb(0, 255, 208)'],
          pointRadius:5,
          boderWidth:3,
          hoverOffset:7,
          fill: false,
    }]        
  })

// 
  setusers(
    {
      labels:createdAt,
      datasets:[
        {
          label:'man',
          data:usersl,
          boderWidth:8,
          fill:false,
            pointRadius:4,

          // pointHighlightFill:4,
          tension:0.4,

          borderColor: 'rgb(219, 132, 33)',
          backgroundColor:["rgb(255, 157, 0)",'rgb(0, 149, 255)'],

          hoverOffset:3,

        }
      ]
    }
  )

  setbookings(
    {
      labels:createdAt,
      datasets:[
        {
          label:'man',
          data:usersl,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          //                 label: 'Transactions',

          boderWidth:3,
          hoverOffset:3,

        }
      ]
    }
  )
  setbook(
    {
      labels:dates,
      datasets:[
        {
          label:'man',
          data:arr,
          boderWidth:3,
          // borderColor:["rgb(0, 102, 255)",'rgb(255, 230, 0)','tomato','green'],
          borderColor: ['rgb(66, 203, 94)','rgb(200, 201, 203)'],
          backgroundColor:["rgb(255, 0, 247)",'rgb(255, 153, 0)','rgb(0, 255, 34)','tomato',],
          hoverOffset:3,

        }
      ]
    }
  )

}
}

man()

return () => {
isMounted = false; 
};

  },[da,date])




return{lines,setlines,date,setdate,isLoading,isSuccess,isError,amount,Totalamount,setTotalamount,users,bookings,transac,todays,book,alldates,userlength,line2,usersl,Totalamount,amount,paid}
}

//   return {Totaltransaction,dat,dates,setdates,datas,pie,data,line,line2,user,userlength}
// }


export default chartData

