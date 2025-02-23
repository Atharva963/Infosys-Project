import { useState } from 'react';
import Signup from './auth/Signup';
import Login from './auth/Login';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
         
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Outlet />
    </div>
  );
};

export default App;
