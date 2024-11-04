
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../src/components/Navbar/Navbar.jsx';
import Footer from '../src/components/Footer/Footer.jsx';

const App = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default App
