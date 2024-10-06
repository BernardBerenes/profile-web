import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './Pages/Index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Experience from './Pages/Experience.tsx'
import AboutMe from './Pages/AboutMe.tsx'
import NotFound from './Pages/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  }, 
  {
    path: "/experience",
    element: <Experience />
  },
  {
    path: "/about-me",
    element: <AboutMe />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
