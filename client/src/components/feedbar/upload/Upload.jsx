import React from 'react'
import "./upload.scss"
import { BsEmojiKiss, BsTag } from 'react-icons/bs'
import { CgLock, CgMediaLive } from 'react-icons/cg'
import UploadImg from "../../../assets/1.png"

const Upload = () => {
  return (
    <>
          <div className="upload">
            <div className="top">
              <img src={UploadImg} alt="" />
              <input type="text" placeholder="What's in your mind?" />
            </div>
            <hr className="Hr"/>
            <div className="bottom">
              <div className="bot1"><CgMediaLive className="icons"style={{color:"red"}}/><span>Photo/Video</span></div>
              <div className="bot1"><BsTag className="icons"/><span>Tag</span></div>
              <div className="bot1"><CgLock className="icons" style={{color:"green"}}/><span>Location</span></div>
              <div className="bot1"><BsEmojiKiss className="icons" style={{color:"yellowgreen"}}/><span>Feelings</span></div>
              <div className="btn"><button>Share</button></div>
            </div>
          </div>
    </>
  )
}

export default Upload