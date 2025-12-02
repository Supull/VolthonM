import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <h1 className="bg-red-500 text-white text-5xl p-6 text-center">React Supabase</h1>
    <RouterProvider router={router}/>
    </>
  </StrictMode>
)
