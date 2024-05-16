import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx"
import PlantesPage from "./pages/PlantesPage.jsx"
import RandoPage from "./pages/RandoPage.jsx"

const router = createBrowserRouter ([
  {
    element: <App/>,
    children: [
      {
        path : "/", 
        element : <HomePage/>
      },
      {
        path : "/plantes", 
        element : <PlantesPage/>
      },
      {
        path : "/rando", 
        element : <RandoPage/>
      },

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
