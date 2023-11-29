import React from 'react'
import Login from './components/login/Login'
import Register from './components/register/Register'
import {createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom"
import Home from './components/home/Home'
import Profile from './components/profile/Profile'
import "./style.scss"
import Navbar from './components/navbar/Navbar'
import Leftbar from './components/leftbar/Leftbar'
import Rightbar from './components/rightbar/Rightbar'
import Feedbar from './components/feedbar/Feedbar'

const App = () => {
  
    return(
     <>
     <Home/>
     </>
    )   
  }

export default App