import React from 'react'
import "./leftbar.scss"
import { LeftBarInfo } from '../../data/data'

const Leftbar = () => {
  return (
    <>
    <div className='leftbar'>
        {
            LeftBarInfo.map((item,index) => {
                return(
        <div className='leftinfo' key={index}>
          <img src={item.img} alt="" width={20} height={20}/>
          <span>{item.title}</span>
        </div>
                )
            })
        }
     
    </div>
    </>
  )
}

export default Leftbar