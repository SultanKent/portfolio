import React from 'react'
import './Skills.css'
import puzzle from '../../assets/puzzle.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import ts from '../../assets/ts.png'
import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'
import node from '../../assets/node-js.png'
import arrow from '../../assets/arrow-icon.png'
import font from '../../assets/Font.png'
import laptop from '../../assets/laptop.png'
import optimization from '../../assets/optimization.png'
import { motion } from 'framer-motion';

const Skills = () => {
  const my_skills = [
  {id: 1, icon: font, name: 'Frontend Development', about: 'i bring ideas to life in the browser, coding from Visual Studio'},
  {id: 2, icon: puzzle, name: 'API Development', about: 'mastering API development is an essential skill for developers in todays interconnected world'},
  {id: 3, icon: laptop, name: 'Web Applications', about: 'Creating dynamic and intuitive web experiences'},
  {id: 4, icon: optimization, name: 'Performance Optimization', about: 'techniques to optimize web application performance'},
  ]
  const my_skills2 = [css, js, ts, react, tailwind, node]
  const Animation_skills = {
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
  const Animation_about = {
    hidden: {
        x: 100,
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
    className="Skills" id='Skills'>
        <div className="Skills_main">
            <div className='my_skills_main'>
            <div className="my-skills">
                {my_skills.slice(0, 2).map((item) => (
                    <motion.div variants={Animation_skills}
                    className="my-skills1" key={item.id}>
                        <img src={item.icon} alt="item.icon" className='item_icon'/>
                        <p className='item_name'>{item.name}</p>
                        <p className='item_about'>{item.about}</p>
                    </motion.div>
                ))}
            </div>
            <div className="my-skills2">
                {my_skills.slice(2, 4).map((item) => (
                    <motion.div variants={Animation_skills}
                    className="my-skills1" key={item.id}>
                        <img src={item.icon} alt="item.icon" className='item_icon'/>
                        <p className='item_name'>{item.name}</p>
                        <p className='item_about'>{item.about}</p>
                    </motion.div>
                ))}
            </div>
            </div>
            <motion.div variants={Animation_about} className="About_skills">
                <h1>About My Frontend<br/> <span>Developer</span> Skills</h1>
                <p> as a frontend developer, I possess a versatile skill set that encompasses coding expertise, design sensibility, and a commitment to delivering high-quality user experiences.</p>
                <p>Learn more <img src={arrow} className="arrow" alt="arrow"/></p>
            </motion.div>
        </div>
        <div className="Skills_main2">
        <h4>Tech Stack</h4>
            {my_skills2.map((item, id) => (
                <img src={item} alt="" key={id} className='item_icon2'/>
            ))}
        </div>
    </motion.div>
  )
}

export default Skills