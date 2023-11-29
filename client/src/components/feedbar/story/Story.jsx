import React from 'react'
import "./story.scss"
import { StoryInfo } from '../../../data/data'

const Story = () => {
  return (
    <>
     <div className="stories">
            {
                StoryInfo.map((item,index) => {
                    return(
                <div className="story">
                  <img src={item.img} alt="" />
                  <span>{item.name}</span>
                </div>
                    )
                })
            }
     </div>
    </>
  )
}

export default Story