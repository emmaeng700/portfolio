import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import React from 'react'
import { About, Projects, Contact, Home, Blog, OpenSource } from './pages'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <main className='bg-slate-300/20'>
       <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/opensourcecontributions' element={<OpenSource />} />
        </Routes>
       </Router>
    </main>
  )
}

export default App