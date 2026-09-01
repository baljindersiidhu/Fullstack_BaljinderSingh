import React from 'react'
import { useUser } from '../context/StudentContext'

function Header() {
    const {name,year}=useUser();
  return (
    <div>
    <h1> Study Hub</h1>
    <p>Welcome {name} {year}</p>
      
    </div>
  )
}

export default Header
