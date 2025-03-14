import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'


import Error from './Error'

import JobsPage from './components/JobsPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
      path: '/',
      element: <Home></Home>
    },
    
    {
      path: 'jobs',
      element: <JobsPage></JobsPage>
    },
    
    
    {
      path: '*',
      element: <Error></Error>
    }
  ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
