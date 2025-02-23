import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='w-full h-[10vh] bg-black bg-opacity-90 text-white flex justify-around items-center'>
     <h1 className=''> logo </h1>
     <NavLink to={"/signup"}>Signup</NavLink>
     <NavLink to={"/login"}>Login </NavLink>
  
    </div>
  )
}

export default Navbar
