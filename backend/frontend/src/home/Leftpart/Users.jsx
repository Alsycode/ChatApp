import React from 'react'
import User from './User'
import useGetAllUsers from '../../context/useGetAllUsers'
import { useAuth } from '../../context/Authprovider'

const Users = () => {
  const [authUser, setAuthUser] = useAuth();
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers)
  return (
    <div>
        <h1 className='px-8 py-2  my-2 font-semibold text-white bg-slate-900 rounded-md' >
            Messages</h1>
       <div className='py-2 overflow-y-auto' style={{maxHeight:"calc(84vh - 14vh)"}}>
       {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
        
       </div>
   
    </div>
  )
}

export default Users