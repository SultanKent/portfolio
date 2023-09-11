import React, { useState, useRef, useEffect } from 'react'
import './Projects.css'
import Project1 from '../../assets/Project1.jpg'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'
import Project4 from '../../assets/Project4.png'
import Project5 from '../../assets/Project5.png'
import Project6 from '../../assets/Project6.png'
import Github from '../../assets/github.png'
import Link_icon from '../../assets/link-icon.png'

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false)
  const showButton = useRef()
  useEffect(() => {
    if (showProjects) {
        showButton.current.style.display = "none"
    }
  }, [showProjects])
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
                <p>Books</p>
                <h2>Library<br/><span>Books App</span></h2>
                <p>if you don't know where can i find good books, you should try this website</p>
                <div className='tech'>
                <span>Redux</span>
                <span>Api</span>
                </div>
                <div className="Link">
                <button className='source_code'>Code <a href='https://github.com/SultanKent/books-app' target="_blank"
                ><img src={Github} alt="Github_logo" /></a></button>
                <button className='source_code'>Live Demo <a href='https://sultankent.github.io/books-app/' target="_blank"
                ><img src={Link_icon} alt="Link_icon" /></a></button>
                </div>
                </div>
            </div>

            <div className="Project1">
                <div className="Project1_main">
                <p>Player</p>
                <h2>Spotify 2.0<br/><span> Music Player</span></h2>
                <p>website is about listening to the music from spotify, if you have spotify account you should visit this website</p>
                <div className='tech'>
                <span>React</span>
                <span>Api</span>
                </div>
                <div className="Link">
                <button className='source_code'>Code <a href='https://github.com/SultanKent/music-player' target="_blank"
                ><img src={Github} alt="Github_logo" /></a></button>
                <button className='source_code'>Live Demo <a href='https://sultankent.github.io/music-player/' target="_blank"><img src={Link_icon} alt="Link_icon" /></a></button>
                </div>
                </div>
                <div className="Project1_img">
                    <img src={Project3} alt="Project3" />
                </div>
            </div>

            {showProjects && (
                <>
            
            <div className="Project1">
                <div className="Project1_img">
                    <img src={Project4} alt="Project4" />
                </div>
                <div className="Project1_main">
                <p>Coffee page</p>
                <h2>Coffee house<br/><span> with json</span></h2>
                <p>the page where you can buy everything fot your coffee and enjoy</p>
                <div className='tech'>
                <span>React</span>
                <span>Express</span>
                </div>
                <div className="Link">
                <button className='source_code'>Code <a href='https://github.com/SultanKent/diplom-react' target="_blank"
                ><img src={Github} alt="Github_logo" /></a></button>
                <button className='source_code'>Live Demo <a href='https://sultankent.github.io/diplom-react/' target="_blank"
                ><img src={Link_icon} alt="Link_icon" /></a></button>
                </div>
                </div>
            </div>

            <div className="Project1">
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
                <div className="Project1_img">
                    <img src={Project5} alt="Project5" />
                </div>
            </div>

            <div className="Project1">
                <div className="Project1_img">
                    <img src={Project6} alt="Project6" />
                </div>
                <div className="Project1_main">
                <p>Weather</p>
                <h2>Weather<br/><span> Forecast App</span></h2>
                <p>it's a useful website where you can know your weather in your city, it was done by using Api</p>
                <div className='tech'>
                <span>Ts</span>
                <span>Tailwind</span>
                </div>
                <div className="Link">
                <button className='source_code'>Code <a href='https://github.com/SultanKent/weather-app' target="_blank"
                ><img src={Github} alt="Github_logo" /></a></button>
                <button className='source_code'>Live Demo <a href='https://sultankent.github.io/weather-app/' target="_blank"><img src={Link_icon} alt="Link_icon" /></a></button>
                </div>
                </div>
            </div>
            </>
            )}
            <button onClick={() => setShowProjects(true)}
            ref={showButton}
            className="show-projects">Show More</button>
            <p className='Github'>More in my <a href='https://github.com/SultanKent'
            target="_blank">Github</a></p>
        </div>
    </div>
  )
}

export default Projects