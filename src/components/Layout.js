import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='bg-Space font-comfortaa h-screen'>
        <div>
            <Navbar/>
        </div>
        <div className="font-comfortaa text-Khaki">
            <Outlet/>
        </div>
    </div>
    

  )
}

export default Layout