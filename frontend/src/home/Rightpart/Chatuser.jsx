import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';
function Chatuser() {
  const { selectedConversation } = useConversation();
  console.log("convo", selectedConversation)
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };
const isOnline = onlineUsers.includes(selectedConversation._id);
  return (
    <div className='flex h-[8vh] space-x-3 items-center justify-center bg-gray-800 hover:bg-gray-700'>
        <div className={`relative avatar ${isOnline ? 'online' : ''}`}>
  <div className="w-14 rounded-full">
    <img src="/public.jpg" />
  </div>
</div>
<div className='py-2 px-3'>
    <h1 className='text-xl'>{selectedConversation?.fullname}</h1>
    <span className="text-sm">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
</div>
    </div>
  )
}

export default Chatuser