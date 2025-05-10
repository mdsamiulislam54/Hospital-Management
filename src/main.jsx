import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/LayOut/Root.jsx'
import Home from './components/Home/Home.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/Store.js'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Login from './components/UserAuthentication/Login.jsx'
import Registration from './components/UserAuthentication/Registration.jsx'

import App from './App'
import Doctor from './components/DoctorList/Doctor.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import DoctorProfile from './components/DoctorProfile/DoctorProfile.jsx'
import Appintment from './components/Appointment/Appintment.jsx'
import Appointment from './components/Appointment/Appintment.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/', element:<Home/>
      },
      {
        path:'dashboard',
        element:<Dashboard/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'registration',
        element:<Registration/>
      },
      {
        path:"doctorlist",
        element:<PrivateRoute><Doctor/></PrivateRoute>
      },
      {
        path:'doctorprofile/:id',
        
        element:<DoctorProfile/>

      },
      {
        path:'appointment',
        element:<Appointment/>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>

</RouterProvider>
    </Provider>
  
  </StrictMode>,
)
