import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import ProfilePanel from './components/ProfilePanel'
import TaskManager from './components/TaskManager'
import { StudentProvider } from './context/StudentContext'
function App() {
  const [count, setCount] = useState(0)

  return (
<div>
 <StudentProvider>
      <div className="app">
        <Header />

        <main>
          <ProfilePanel />

          <TaskManager />
        </main>
      </div>
    </StudentProvider>
</div>
  )
}

export default App
