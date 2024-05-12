// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About/About'
import Experiences from './Components/Experiences/Experiences'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Work from './Components/Work/Work'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.min.css'


import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import NotFound from './Components/NotFound/NotFound'

function App() {
  // const [count, setCount] = useState(0)


  const routes = createHashRouter([{
    path: '/',
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children:
      [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'skills', element: <Skills /> },
        { path: 'experience', element: <Experiences /> },
        { path: 'work', element: <Work /> }
      ]
  }])

  return (
    <>
      {/* <h1>welcome</h1> */}
      <RouterProvider router={routes} />



    </>
  )
}

export default App
