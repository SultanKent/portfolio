import React from 'react'
import './About.css'
import MyArt from '../../assets/MyArt.jpg'

const About = () => {
  return (
    <div className="About" id='About'>
        <div className="About_main">
            <div className="About_words">
                <h1>A bit About me</h1>
                <p>Hi, I'm Sultan, a frontend developer with a passion for creating user-friendly and visually appealing websites. I discovered my love for coding during my school years, and since then, I've been hooked on bringing digital designs to life through code.</p>
                <div className='About_words2'>
                  <span>
                  <h4>Experience</h4>
                  <p>year of programming</p>
                  </span>
                  <span>
                    <h4>Completed</h4>
                    <p>10 + Projects</p>
                  </span>
                  <span>
                    <h4>Support</h4>
                    <p>Online 24/7</p>
                  </span>
                </div>
            </div>
            <div className="About_img">
                <img src={MyArt} alt="MyArt" className='MyArt'/>
                <div>
                  <span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About