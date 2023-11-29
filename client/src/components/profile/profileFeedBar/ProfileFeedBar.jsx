import React from 'react'
import Post from '../../feedbar/post/Post'
import ProfileAndCover from '../profileAndCover/ProfileAndCover'

const ProfileFeedBar = () => {
  return (
    <>
    <div className='profileFeedBar'>
      <ProfileAndCover/>
      <Post/>
    </div>
    </>
  )
}

export default ProfileFeedBar