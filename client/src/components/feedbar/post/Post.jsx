import React, { useContext } from 'react'
import "./post.scss"
import { PostInfo } from '../../../data/data'
import { BsHeartFill, BsShare, BsThreeDotsVertical } from 'react-icons/bs'
import { CgComment } from 'react-icons/cg'
import Comments from './comments/Comments'
import { DarkModeContext } from '../../../context/themeMode'

const Post = () => {
  const{commentOpen, toggleComment} = useContext(DarkModeContext)
  return (
    <>
    <div className='post'>

    {
        PostInfo.map((item,index) => {
            return(
         <div className="postdetails" key={index}>
             <div className="toppost">
              <div className="topleft">
                <img src={item.pp} alt="" />
                <span className="name">{item.name}</span>
                <span className="time">{item.days}</span>
              </div>
              <div className="topright">
                <BsThreeDotsVertical className="toprighticon"/>
              </div>
             </div>
             <div className="centerpost">
              <span className="caption">Hello World</span>
              <div className="postpic">
              <img src={item.img} alt="" />
              </div>
             </div>
             <div className="bottompost">
             <div className="bottomleft">
              <div className='likes'>
              <BsHeartFill className="like" style={{color:"red"}}/>
              <span>{item.likes}</span>
              </div>
              <div className='comment' onClick={()=>toggleComment(index)}>
              <CgComment className="like" style={{color:"red"}}/>
              <span>{item.comments}</span>
              </div>
             </div>
             <div className="bottomright">
                <BsShare/>
               <span>Share</span>
             </div>
             </div>
             {
              commentOpen && 
               <div>
                 <Comments />
               </div>
             }
          </div>
          
            )
        })
    }
   
    </div>

    </>
  )
}

export default Post