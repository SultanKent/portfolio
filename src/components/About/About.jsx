import React from 'react'
import './About.css'
import MyArt from '../../assets/MyArt.jpg'
import { motion } from 'framer-motion';
import AboutMe from '../../ui/about/AboutMe'

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
          <AboutMe />
        </div>
    </motion.div>
  )
}

export default About