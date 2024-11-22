import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from '../context/Authprovider';
import io from "socket.io-client";

const socketContext = createContext();

// Custom hook to use the socket context
export const useSocketContext = () => {
  return useContext(socketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [authUser] = useAuth();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:4002", {
        query: {
          userId: authUser.user._id,
        },
      });
      setSocket(socket);
      
      socket.on("getOnlineUsers", (users) => {
        console.log("Online users received:", users); // Log received users
        setOnlineUsers(users);
      });

      // Cleanup function
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  // Debugging: Monitor onlineUsers changes
  useEffect(() => {
    console.log("Online users state updated:", onlineUsers);
  }, [onlineUsers]);

  return (
    <socketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </socketContext.Provider>
  );
};
