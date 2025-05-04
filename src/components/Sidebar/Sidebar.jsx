import React, { use } from 'react'
import Navbar from '../Navbar/Navbar'
import Doctor from '../../assets/9439123.png'
import { NavLink } from 'react-router'
import { MdDashboard } from 'react-icons/md'
import { RiHome2Fill } from 'react-icons/ri'
import { FaRegCalendarDays, FaUser, FaUserDoctor } from 'react-icons/fa6'
import { FaPlusSquare } from 'react-icons/fa'
import { TbReport } from 'react-icons/tb'
import { IoIosSettings } from 'react-icons/io'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const {user} = useSelector((state)=>state.user)
  return (
    <div className="w-10/12 mx-auto  min-h-screen p-5 rounded-lg text-white">
    <div className="flex justify-center items-center mb-8">
      <img src={Doctor} alt="Doctor" className="w-24 h-24 rounded-full border-4 border-white" />
    </div>
    <p className='text-center text-sm mb-2'>
    {
      user && (user.phone)
    }
    </p>
  
    <div>
      <ul className="flex flex-col gap-4 justify-center items-center">
        <NavLink
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          to="/"
        >
          <RiHome2Fill /> Home
        </NavLink>
  
        <NavLink
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          to="/dashboard"
        >
          <MdDashboard /> Dashboard
        </NavLink>
  
        <NavLink
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          to="/doctors"
        >
          <FaUserDoctor /> Doctors List
        </NavLink>
  
        <NavLink
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          to="/add-doctor"
        >
          <FaPlusSquare /> Add Doctor
        </NavLink>
  
        <NavLink
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          to="/appointments"
        >
          <FaRegCalendarDays /> Appointments
        </NavLink>
  
        <NavLink
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          to="/reports"
        >
          <TbReport /> Reports
        </NavLink>
  
        <NavLink
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          to="/settings"
        >
          <IoIosSettings /> Settings
        </NavLink>
        {
          user ? <button
          className=" btn btn-outline flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-white transition"
          
        >
          <FaUser /> Log Out 
        </button> :  <NavLink
          className=" btn btn-outline flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-white transition"
          to={'/login'}
        >
          <FaUser /> Sing In / Login
        </NavLink>
        }
       
        
      </ul>
    </div>

  </div>
  
  )
}

export default Sidebar