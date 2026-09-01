import React from 'react'
import { useUser } from '../context/StudentContext'

function ProfilePanel() {
    const {name,year,email}=useUser();
  return (
    <div>
    <h2>
        Student details
    </h2>
    <p>name : {name}</p>
    <p>Year : {year}</p>
      <p>email: {email}</p>
    </div>
  )
}

export default ProfilePanel
