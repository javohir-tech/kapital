import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//React router dom
import { RouterProvider } from 'react-router-dom'
//Router
import router from './Routes/Router.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
