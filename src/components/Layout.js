import React from 'react'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const Layout = () => {
  return (
    <div className='bg-Eerie font-comfortaa h-screen'>
        <div className="text-Khaki">
          <AnimatePresence exitBeforeEnter initial={false}>
            <Outlet/>
          </AnimatePresence>
        </div>
    </div>
    

  )
}

export default Layout