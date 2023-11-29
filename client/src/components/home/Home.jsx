import React, { useContext } from 'react'
import "./home.scss"
import Navbar from '../navbar/Navbar'
import Leftbar from '../leftbar/Leftbar'
import Feedbar from '../feedbar/Feedbar'
import Rightbar from '../rightbar/Rightbar'
import { DarkModeContext } from '../../context/themeMode'

const Home = () => {
  const{darkMode} = useContext(DarkModeContext)
  return (
    <>
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
    <Navbar/>
    <div className='home'>
        <Leftbar/>
        <Feedbar/>
        <Rightbar/>
    </div>
    </div>
    </>
  )
}

export default Home