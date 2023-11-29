import React from 'react'
import "./rightbar.scss"
import RightImg from "../../assets/cake.png"
import BigImg from "../../assets/messi.webp"
import ChatImg from "../../assets/man1.jpg"

const Rightbar = () => {
  return (
    <>
    <div className='rightbar'>
    <div className="rightbarDetails">
            <div className="topmost">
              <h4>Birthdays</h4>
              <div className="birthday">
                <img src={RightImg} alt="" />
                <h5><span>Golu</span> and <span>6 others</span> <br/> have birthday today.</h5>
              </div>
            </div>

            <div className="news">
              <img src={BigImg} alt="" />
              <h2>The Only <br /> GOAT.</h2>
            </div>

            <div className="online">
              <h4>Online Friends</h4>

              <div className="image">
                <div className="photo">
                <img src={ChatImg} alt="" />
                <div className="dot"></div>
                </div>
                <span>Messi</span>
              </div>
              <div className="image">
                <div className="photo">
                <img src={ChatImg} alt="" />
                <div className="dot"></div>
                </div>
                <span>Shuvam</span>
              </div>
              <div className="image">
                <div className="photo">
                <img src={ChatImg} alt="" />
                <div className="dot"></div>
                </div>
                <span>Monu</span>
              </div>
              <div className="image">
                <div className="photo">
                <img src={ChatImg} alt="" />
                <div className="dot"></div>
                </div>
                <span>Bishal</span>
              </div>
              <div className="image">
                <div className="photo">
                <img src={ChatImg} alt="" height={20} width={20}/>
                <div className="dot"></div>
                </div>
                <span>Bobby</span>
              </div>
              <div className="image">
                <div className="photo">
                <img src={ChatImg} alt="" height={20} width={20}/>
                <div className="dot"></div>
                </div>
                <span>Carlous</span>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Rightbar