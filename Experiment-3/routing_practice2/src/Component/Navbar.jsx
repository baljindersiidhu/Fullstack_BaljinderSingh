import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex gap-4'>
    <NavLink to='/'>Home</NavLink>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar
