import React from 'react'
import "./profileAndCover.scss"
import Hulk from "../../../assets/hulk1.jpg"
import { BsFacebook, BsGit, BsInstagram, BsLinkedin, BsThreeDotsVertical, BsTwitter } from 'react-icons/bs'

const ProfileAndCover = () => {
  return (
    <>
    <div className='profileAndCover'>
    <div className='coverPic'>
        <img src={Hulk} alt="" />   
    </div>
    <div className='coverProfileInfo'>
       <h3>Sushant Shah</h3>
       <div className="aboutInfo">
         <div className="left">
           <BsFacebook/>
           <BsInstagram/>
           <BsTwitter/>
           <BsLinkedin/>
           <BsGit/>
         </div>
           <div className="center">
              <div className="left"></div>
              <div className="right"></div>
           </div>
           <div className="right">
             <BsThreeDotsVertical/>
           </div>
       </div>
       <button>Hello</button>
    </div>
    <div className='profilePic'>
          <img src={Hulk} alt="" />
        </div>
    </div>
    </>
  )
}

export default ProfileAndCover