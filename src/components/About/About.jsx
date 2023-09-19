import React from 'react'
import './About.css'
import MyArt from '../../assets/MyArt.jpg'
import { motion } from 'framer-motion';

const About = () => {
  const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
  }
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
    className="About" id='About'>
        <div className="About_main">
            <motion.div variants={textAnimation} className="About_words">
                <h1>A bit About me</h1>
                <p>Hi, I'm Sultan, a frontend developer with a passion for creating user-friendly and visually appealing websites. I discovered my love for coding during my school years, and since then, I've been hooked on bringing digital designs to life through code.</p>
                <div className='About_words2'>
                  <span>
                  <h4>Experience</h4>
                  <p>1.5 years programming</p>
                  </span>
                  <span>
                    <h4>Completed</h4>
                    <p>30 + Projects</p>
                  </span>
                  <span>
                    <h4>Support</h4>
                    <p>Online 24/7</p>
                  </span>
                </div>
            </motion.div>
            <div className="About_img">
                <img src={MyArt} alt="MyArt" className='MyArt'/>
                <div>
                  <span></span>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About