import {Outlet} from "react-router-dom"; 
import Nabvar from "./components/Navbar";
import './App.css'

export default function App () {

  return (
   <>
   <main> 
    <Nabvar/>
    <Outlet/>
   </main>
    
     </>
  )
  }


