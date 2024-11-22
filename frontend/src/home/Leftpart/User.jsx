import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  const id = user._id;
  console.log("onlineUsers", onlineUsers)
  console.log("userid", id)
console.log("value", isOnline)
  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${isSelected ? 'bg-slate-700' : ''}`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 duration-300 cursor-pointer">
        <div className={`relative avatar ${isOnline ? 'online' : ''}`}>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent">
            <img src="/public.jpg" alt="User Profile" className="w-full h-full object-cover" />
          </div>
          
        </div>
        <div>
          <h1 className="font-bold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
