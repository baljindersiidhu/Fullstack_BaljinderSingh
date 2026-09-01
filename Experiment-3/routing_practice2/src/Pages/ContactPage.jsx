import React from 'react'
import { useNavigate,Navigate } from 'react-router-dom';

function ContactPage() {
    const navigate=useNavigate();
    function submitHandler(event){
event.preventDefault();
navigate('/')
    }
  return (
    <div >
      <p className='text-2xl font-extrabold'>this is contact page</p>
      <form action="" onSubmit={submitHandler}> <label htmlFor="">Email:</label>
      <input type="text" placeholder='enter email' required />
       <br />

      <label htmlFor="" required>Password</label>
      <input type="text" placeholder='enter password' />
      <button>Submit</button></form>
     
    </div>
  )
}

export default ContactPage
