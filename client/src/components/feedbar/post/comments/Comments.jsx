import React from 'react'
import "./comments.scss"
import hulk from "../../../../assets/hulk1.jpg"
import { comments } from '../../../../data/data'

const Comments = () => {
  return (
    <>
        <div className='comments'>
        <div className="top">
    <div className="image">
        <img src={hulk} alt="" />
    </div>
    <input type="text" placeholder='write your comment ...'/>
    <button>Send</button>
        </div>
        {
        comments.map((item, index)=>{
          return(

        <div className="bottom"  key={index}>
            <div className="left">
              <img src={item.img} alt="" />
            </div>
            <div className="center">
                <p>{item.name}</p>
                <h5>{item.comment}</h5>
            </div>
            <div className="right">
            <p>2 hours ago.</p>
            </div>
        </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Comments