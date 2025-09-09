import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//React router dom
import { RouterProvider } from 'react-router-dom'
//Router
import router from './Routes/Router.jsx'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
