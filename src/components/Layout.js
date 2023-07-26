import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { AnimatePresence } from 'framer-motion'

const Layout = () => {
  return (
    <div className='bg-Eerie font-comfortaa h-screen'>
        <div className='bg-Space'>
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