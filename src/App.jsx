import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-espresso flex flex-col font-sans selection:bg-gold/30 selection:text-espresso">
      <Navbar />
      <div className="flex-1">
        <Home />
      </div>
      <Footer />
    </div>
  )
}
