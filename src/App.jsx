import { useState } from 'react';
import Signup from './auth/Signup';
import Login from './auth/Login';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import ForgotPassword from './auth/ForgotPassword';

function App() {
  return (
    <>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path='ForgotPassword' element={<ForgotPassword/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

     
    </>
  );
}

const Layout = () => {
  return (
    <div 
        className="min-h-screen flex  flex-col items-center justify-center bg-cover bg-center "
        style={{ 
            backgroundImage: "url('https://motionarray.imgix.net/preview-266062-WgSdDk40Wu-high_0000.jpg?w=660&q=60&fit=max&auto=format')",
            backgroundAttachment: "fixed" // Optional: makes background fixed while scrolling
        }}>
        <Outlet />
    </div>
);
};

export default App;
