import React from 'react'
import { useGetPostQuery as get } from '../features/currentslice'
import { selectAll } from '../features/currentslice'
import { useEffect as eff } from 'react'
import { formatDistanceToNow ,parseISO } from 'date-fns'
import { useSelector as select } from 'react-redux';
const table = () => {

  const view=select(selectAll)

    const{
          data,
          isSuccess
      }=get('userpermit',{
          refetchOnFocus:true,
          refetchOnMountOrArgChange:true
      })
      let content;

      eff(()=>{
        console.log(view)
      },[])
  if(isSuccess){

      const {ids,entities}=data;
      content=ids.slice(0,10).map(id=>{
    const user=entities[id];

    const dates=parseISO(user.date)
// console.log(user)
   return (
    <tr key={user.id}>
          <td className='fs'>
            {user.username}
            </td>
        <td className='td_none'>{user.roles.toString().replace(' ,').replaceAll(' ,')}</td>
        <td className='fs'>{formatDistanceToNow(dates)} ago</td>
    </tr>

)
})
// :content=<p className='search_pa' style={{textAlign:"center",width:"100%",}}>User is not exist</p>

}    

  return (
    <table className='table' style={{marginBottom:"100px"}}>
        <thead>
          <th>Username</th>
          <th className='td_none '>roles</th>
          <th  className="sb">date/sign</th>
        </thead>
    {content}
    </table>

  )
}

export default table
