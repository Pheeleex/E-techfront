import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Navbar/Footer'

const RootLayout = () => {
  return (
    <div className='root-layout'>
        <Navbar />
            <main>
                <Outlet />
            </main>
        <Footer />
    </div>
  )
}

export default RootLayout