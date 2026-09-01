import React, { useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {UserContext} from '../Context/UserContext'

function DashboardPage() {
  const navigate=useNavigate();
  const {name}=useContext(UserContext)
  return (
    <div className='flex gap-3.5 justify-between'>
    {/* <p>{name}</p> */}    
      <p className='flex gap-5 flex-col text-2xl ' >
       <p  onClick={()=>{navigate('/dashboard')}}>
         THis is Dashboard page 
       </p>
       <div className='flex gap-3 text-xl flex-col'> <NavLink to='profile'> Profile view</NavLink>
        <NavLink to='settings'> Settings</NavLink></div>
        <Outlet></Outlet>

        <button  onClick={()=>{navigate(-1)}}>Go Back</button>
      </p>
    </div>
  )
}

export default DashboardPage
