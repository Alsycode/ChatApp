import React from 'react';
import Left from './home/Leftpart/Left.jsx';
import Right from './home/Rightpart/Right.jsx'; // Corrected the case sensitivity
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import { useAuth } from './context/authProvider.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [authUser] = useAuth(); // Assuming useAuth returns [authUser, setAuthUser]
  
  return (
    <Routes>
      {/* Root Route */}
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Login Route */}
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />}
      />

      {/* Signup Route */}
      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <Signup />}
      />
    </Routes>
  );
}

export default App;
