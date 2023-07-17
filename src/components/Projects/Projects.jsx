import React from 'react'
import './Projects.css'
import Project1 from '../../assets/Project1.jpg'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'
import Github from '../../assets/github.png'
import Link_icon from '../../assets/link-icon.png'

const Projects = () => {
  return (
    <div className="Projects" id='Projects'>
        <div className="Projects_main">
        <h1>Each Project is a unique piece of development</h1>
            <div className="Project1">
                <div className="Project1_main">
                <p>PlaynChill</p>
                <h2>Games<br/><span> Ecommerce website</span></h2>
                <p>that website is for people who is going to buy online game with discount but don't know where to buy</p>
                <div className='tech'>
                <span>React</span>
                <span>Jsx</span>
                </div>
                <div className="Link">
                <button className='source_code'>Code <a href='https://github.com/SultanKent/ecommerce' target="_blank"
                ><img src={Github} alt="Github_logo" /></a></button>
                <button className='source_code'>Live Demo <a href='https://sultankent.github.io/ecommerce/' target="_blank"><img src={Link_icon} alt="Link_icon" /></a></button>
                </div>
                </div>
                <div className="Project1_img">
                    <img src={Project1} alt="Project1" />
                </div>
            </div>

            <div className="Project1">
                <div className="Project1_img">
                    <img src={Project2} alt="Project2" />
                </div>
                <div className="Project1_main">
                <p>Party Station</p>
                <h2>The Best<br/><span> Games in the World</span></h2>
                <p>that website is for people who is going to buy online game with discount but don't know where to buy</p>
                <div className='tech'>
                <span>React</span>
                <span>Jsx</span>
                </div>
                <div className="Link">
                <button className='source_code'>Code <a href='https://github.com/SultanKent/website' target="_blank"
                ><img src={Github} alt="Github_logo" /></a></button>
                <button className='source_code'>Live Demo <a href='https://sultankent.github.io/website/' target="_blank"
                ><img src={Link_icon} alt="Link_icon" /></a></button>
                </div>
                </div>
            </div>

            <div className="Project1">
                <div className="Project1_main">
                <p>Music</p>
                <h2>Musik Concert<br/><span> Landing Page</span></h2>
                <p>that website is for people who is going to buy online game with discount but don't know where to buy</p>
                <div className='tech'>
                <span>React</span>
                <span>Jsx</span>
                </div>
                <div className="Link">
                <button className='source_code'>Code <a href='https://github.com/SultanKent/project-new' target="_blank"
                ><img src={Github} alt="Github_logo" /></a></button>
                <button className='source_code'>Live Demo <a href='https://sultankent.github.io/project-new/' target="_blank"
                ><img src={Link_icon} alt="Link_icon" /></a></button>
                </div>
                </div>
                <div className="Project1_img">
                    <img src={Project3} alt="Project1" />
                </div>
            </div>
            <p className='Github'>More in my <a href='https://github.com/SultanKent'
            target="_blank">Github</a></p>
        </div>
    </div>
  )
}

export default Projects