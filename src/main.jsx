import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'


import Error from './Error'

import JobsPage from './components/JobsPage'
import Contact from './components/Contact'
import About from './components/About'


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
      path: 'contact',
      element: <Contact></Contact>
    },
    {
      path: 'about',
      element: <About></About>
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
