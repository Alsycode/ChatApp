import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from "./Logout"
function Left() {
  return (
    <div className="h-100vh w-[30%]  bg-black text-gray-300">
      <Search/>
      <div className='py-2 overflow-y-auto' style={{minHeight:"calc(84vh - 8vh)"}}>
      <Users/>
      </div>
    
      <Logout/>
    </div>
  )
}

export default Left