import React from 'react'
import "./navbar.scss"
import { BsMessenger, BsBellFill, BsHouseExclamation, BsMailbox, BsSearch, BsSun, BsFillMoonFill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import UserImg from "../../assets/friend.png"
import { useContext } from 'react';
import { DarkModeContext } from '../../context/themeMode';

const Navbar = () => {
  const {toggleTheme,darkMode,setDarkMode} = useContext(DarkModeContext)
  return (
    <>
    <div className='navbar'>
        <div className="left">
            <h3>PoogyHub</h3>
                <BsHouseExclamation/>
                <div className="thememode">
                     <div className='sun'><BsSun /></div>
                     <div className='moon'><BsFillMoonFill /></div>
                 <div className={`ball ${darkMode? "ballModeOn" : ""}`} onClick={toggleTheme}></div>
                 </div>
                <div className='search'>
                    <BsSearch/>
                    <input type="search" placeholder='Search....' />
                </div>
        </div>
        <div className="right">
            <CgMenuGridO/>
            <BsMailbox/>
          <BsBellFill/>
          <BsMessenger/>
          <div className='userinfo'>
            <div className='userimg'>
          <img src={UserImg} alt="" width={15} height={15}/>
            </div>
          <span>John Doe</span>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar