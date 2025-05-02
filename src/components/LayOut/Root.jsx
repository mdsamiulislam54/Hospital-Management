import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'

const Root = () => {
  return (
    <div>
        <nav className='md:hidden max-md:block py-4 shadow bg-gradient-to-r to-blue-50 relative'>
            <div className="navbar_container w-10/12 mx-auto">
            <Navbar/>
            </div>
        </nav>
        <main className='flex flex-1   relative overflow-hidden '>
            <div className='w-70 hidden md:block bg-blue-500 h-full overflow-y-auto fixed'><Sidebar/></div>
            <div className='flex-1 md:ml-70 px-2 overflow-y-auto h-full'><Outlet/></div>
        </main>
        <footer>
            {/* <Footer/> */}
        </footer>
    </div>
  )
}

export default Root