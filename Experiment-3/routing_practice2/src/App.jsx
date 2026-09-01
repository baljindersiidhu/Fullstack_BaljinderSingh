import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import DashboardPage from './Pages/DashboardPage'
import Navbar from './Component/Navbar'
import Settings from './Pages/Settings'
import Profile from './Pages/Profile'
import ContactPage from './Pages/ContactPage'
import AboutPage from './Pages/AboutPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-9/11 mx-auto justify-center flex-col'>
    <Navbar></Navbar>
      

<Routes>
  <Route path='/' element={<HomePage></HomePage>} ></Route>
  <Route path='/contact' element={<ContactPage></ContactPage>} ></Route>
  <Route path='/about' element={<AboutPage></AboutPage>}  ></Route>
  <Route path='/dashboard' element={<DashboardPage></DashboardPage>}>
      <Route path='settings' element={<Settings></Settings>}></Route>
    <Route path='profile' element={<Profile></Profile>}  ></Route>
  </Route>
</Routes>

  
    </div>
  )
}

export default App
