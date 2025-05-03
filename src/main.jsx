import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/LayOut/Root.jsx'
import Home from './components/Home/Home.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/Store.js'
import Dashboard from './components/Dashboard/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/', element:<Home/>
      },
      {
        path:'dashboard',
        element:<Dashboard/>
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
