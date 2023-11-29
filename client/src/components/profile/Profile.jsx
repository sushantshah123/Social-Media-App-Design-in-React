import React from 'react'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/themeMode'
import Navbar from '../navbar/Navbar'
import Leftbar from '../leftbar/Leftbar'
import Rightbar from '../rightbar/Rightbar'
import ProfileFeedBar from './profileFeedBar/ProfileFeedBar'
import Post from '../feedbar/post/Post'

const Profile = () => {
    const{darkMode} = useContext(DarkModeContext)
  return (
    // <div className={`theme-${darkMode ? "dark" : "light"}`}>
    // <Navbar/>
    // <div className='home'>
    //     <Leftbar/>
        <ProfileFeedBar/>
        //  <Rightbar/>
    // </div>
    // </div>
  )
}

export default Profile