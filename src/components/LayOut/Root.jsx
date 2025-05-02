import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <div>
        <nav className='py-4 shadow bg-gradient-to-r to-blue-50'>
            <div className="navbar_container w-10/12 mx-auto">
            <Navbar/>
            </div>
        </nav>
        <main className='h-screen'>
            <Outlet/>
        </main>
        <footer>
            {/* <Footer/> */}
        </footer>
    </div>
  )
}

export default Root