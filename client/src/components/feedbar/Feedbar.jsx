import "./feedbar.scss"
import React from 'react'
import Story from "./story/Story"
import Upload from "./upload/Upload"
import Post from "./post/Post"

const Feedbar = () => {
  return (
    <>
    <div className='feedbar'>
       <Story/>
       <Upload/>
       <Post/>
    </div>
    </>
  )
}

export default Feedbar