import React from 'react'
import {  FaUsers, FaHospital, FaCalendarCheck } from 'react-icons/fa6'
import CountUp from 'react-countup'
import { FaUserMd } from 'react-icons/fa'

const DashboardSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-24 px-4 md:px-10 ">
      
      {/* Total Doctors */}
      <div className="flex items-center bg-white/40 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
        <div className="text-white text-4xl mr-4">
          <FaUserMd />
        </div>
        <div>
          <h4 className="text-white text-sm">Total Doctors</h4>
          <p className="text-2xl font-bold text-white">
            <CountUp end={120} duration={10} />
          </p>
        </div>
      </div>

      {/* Total Patients */}
      <div className="flex items-center bg-white/40 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
        <div className="text-white text-4xl mr-4">
          <FaUsers />
        </div>
        <div>
          <h4 className="text-white text-sm">Total Patients</h4>
          <p className="text-2xl font-bold text-white">
            <CountUp end={350} duration={10} />
          </p>
        </div>
      </div>

      {/* Appointments */}
      <div className="flex items-center bg-white/40 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
        <div className="text-white text-4xl mr-4">
          <FaCalendarCheck />
        </div>
        <div>
          <h4 className="text-white text-sm">Appointments</h4>
          <p className="text-2xl font-bold text-white">
            <CountUp end={680} duration={10} />
          </p>
        </div>
      </div>

      {/* Total Hospitals */}
      <div className="flex items-center bg-white/40 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
        <div className="text-white text-4xl mr-4">
          <FaHospital />
        </div>
        <div>
          <h4 className="text-white text-sm">Total Hospitals</h4>
          <p className="text-2xl font-bold text-white">
            <CountUp end={20} duration={10} />
          </p>
        </div>
      </div>

    </div>
  )
}

export default DashboardSummary
