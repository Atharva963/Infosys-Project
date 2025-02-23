import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='w-full , h-[10vh] bg-slate-500 flex justify-around items-center '>
     <h1 className=''> logo </h1>
     <NavLink to={"/signup"}>Signup</NavLink>
     <NavLink to={"/login"}>Login </NavLink>
     {/* <h1>signup</h1>
     <h1>Login</h1> */}
    </div>
  )
}

export default Navbar
