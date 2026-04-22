import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'dashboard') {
    return <Dashboard onNavigate={setPage} />
  }

  return (
    <div>
      <Navbar />
      <Hero onNavigate={setPage} />
    </div>
  )
}

export default App
