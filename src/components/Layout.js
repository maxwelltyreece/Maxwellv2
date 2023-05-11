import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { AnimatePresence } from 'framer-motion'

const Layout = () => {
  return (
    <div className='bg-Space font-comfortaa h-screen'>
        <div>
            <Navbar/>
        </div>
        <div className="font-comfortaa text-Khaki">
          <AnimatePresence exitBeforeEnter initial={false}>
            <Outlet/>
          </AnimatePresence>
        </div>
    </div>
    

  )
}

export default Layout