import React from 'react'
import { useState } from 'react'
const Userhandle = () => {

    const [list,setlist]=useState(['UserList',"employersList"])
    const [change,setchange]=useState('UserList')
    const [users,setusers]=useState([
        {
            id:0,
            username:"suleiman",
            roles:["Users"],
            active:true,
            date:new Date().toDateString()

        },
        {
            id:1,
            username:"yusuf",
            roles:["admin","Users"],
            active:true,
            date:new Date().toDateString()

        },
        {
            id:2,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:3,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:4,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:5,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:6,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:7,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:8,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:9,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:10,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:11,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:12,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:13,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:14,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:15,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:16,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:17,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:18,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:19,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:20,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:21,
            username:"kaita",
            roles:["Users"],
            active:false,
            date:new Date().toDateString()
        },
    ])
    const [employee,setemployee]=useState([
        {
            id:0,
            username:"suleiman",
            roles:["employee"],
            active:true,
            date:new Date().toDateString()

        },
        {
            id:22,
            username:"yusuf",
            roles:["admin"],
            active:true,
            date:new Date().toDateString()

        },
        {
            id:23,
            username:"kaita",
            roles:["employee"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:24,
            username:"kaita",
            roles:["employee"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:25,
            username:"kaita",
            roles:["employee"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:26,
            username:"kaita",
            roles:["employee"],
            active:false,
            date:new Date().toDateString()
        },
        {
            id:27,
            username:"kaita",
            roles:["employee"],
            active:false,
            date:new Date().toDateString()
        },
        
    ])

    return{list,change,employee,setchange,setemployee,users,setusers }
}

export default Userhandle
