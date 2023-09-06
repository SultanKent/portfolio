import React from 'react'
import './Footer.css'
import telegram from '../../assets/telegram.png'
import instagram from '../../assets/instagram.png'
import In from '../../assets/in.png'
import github from '../../assets/github.png'

const Footer = () => {
    const handleDownloadClick = () => {
        const fileUrl = '/cv.pdf'; 
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = 'резюме'; 
        a.click();
      }
  const social_messengers = [
    {
        id: 1,
        imageSrc: telegram,
        link: 'https://t.me/sleepcc'
    },
    {
        id: 2,
        imageSrc: instagram,
        link: 'https://www.instagram.com/kiritoff75/'
    },
    {
        id: 3,
        imageSrc: In,
        link: 'https://kz.linkedin.com/in/sultan-kuanishev-864373282'
    },
    {
        id: 4,
        imageSrc: github,
        link: 'https://github.com/SultanKent'
    },
  ]
  return (
    <div className="Footer" id='Footer'>
        <div className="Footer_main">
            <div className="Footer_main1">
                <h2>Contact Me</h2>
                <p>ffkirito6@gmail.com</p>
                <div className="messengers">
                    {social_messengers.map((item) => (
                        <a href={item.link} key={item.id} target="_blank">
                        <img src={item.imageSrc} alt="messengers"/>
                        </a>
                    ))}
                </div>
                <button className='Download' onClick={handleDownloadClick}>Download CV</button>
            </div>
            <div className="Footer_main2">
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <textarea type="text" placeholder='Your Message'/>
                <button className='Submit'>Submit</button>
            </div>
        </div>
        <div className="Footer_down">
            <p className='last_words'>All rights © Reserverd</p>
        </div>
    </div>
  )
}

export default Footer