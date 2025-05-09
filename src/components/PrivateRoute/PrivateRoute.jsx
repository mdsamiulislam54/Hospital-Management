import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.user)
  const location = useLocation()

  if (loading) {
    return <div className='min-h-screen xl:ml-64 flex justify-center items-center'><span className="loading loading-infinity loading-xl text-5xl text-white"></span></div>
  }

  if (!user) {
    return <Navigate state={ location.pathname } to="/login"  />
  }

  return children
}

export default PrivateRoute
