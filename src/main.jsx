import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './pages/App.jsx'
import Services from './pages/Services.jsx'
import ServiceAreas from './pages/ServiceAreas.jsx'
import ServiceAreaDetail from './pages/ServiceAreaDetail.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Residential from './pages/Residential.jsx' // ⬅️ NEW PAGE

const router = createBrowserRouter([
  { path: '/', element: <App/> },
  { path: '/services', element: <Services/> },
  { path: '/service-areas', element: <ServiceAreas/> },
  { path: '/service-areas/:slug', element: <ServiceAreaDetail/> },
  { path: '/projects', element: <Projects/> },
  { path: '/residential', element: <Residential/> }, // ⬅️ NEW ROUTE
  { path: '/about', element: <About/> },
  { path: '/contact', element: <Contact/> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
