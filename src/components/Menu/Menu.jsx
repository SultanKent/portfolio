import React, { useEffect, useState } from 'react'
import './Menu.css'
import { Link } from 'react-scroll';
import Hamb from '../../assets/Hamb.png'
import closeIcon from '../../assets/closeIcon.png'
import telegram from '../../assets/telegram.png'
import instagram from '../../assets/instagram.png'
import In from '../../assets/in.png'
import github from '../../assets/github.png'

const Menu = () => {
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
        link: 'https://kz.linkedin.com/in/sultan-kuanishev-74bb84278'
    },
    {
        id: 4,
        imageSrc: github,
        link: 'https://github.com/SultanKent'
    },
  ]
  const [openMenu, setOpenMenu] = useState(false)
  const openAndCloseMenu = () => {
    setOpenMenu(!openMenu);
  }
  useEffect(() => {
    const body = document.querySelector('body');
    if (openMenu) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [openMenu]);
  return (
    <div className="Menu">
      <div className="Menu_main">
        <h1>Frontend.</h1>
        {window.innerWidth > 760 ? (
            <nav className='navbar'>
                <li>
                <Link to="About" smooth={true} duration={500}>
                  About
                </Link>
                </li>
                <li>
                <Link to="Skills" smooth={true} duration={500}>
                  Skills
                </Link>
                </li>
                <li>
                <Link to="Projects" smooth={true} duration={500}>
                  Projects
                </Link>
                </li>
                <li>
                <Link to="Footer" smooth={true} duration={500}>
                  Contacts
                </Link>
                </li>
            </nav>
        ): 
        openMenu ? (
            <div className="Menu-overlay" onClick={openAndCloseMenu}>
            <img src={closeIcon} alt="closeIcon" onClick={openAndCloseMenu} className="close"/>
            <div className="my-social-messengers">
              {social_messengers.map((item) => (
                <a href={item.link} key={item.id} target="_blank">
                  <img src={item.imageSrc} alt="item.imageSrc" />
                </a>
              ))}
            </div>
              <div className="Menu-content">
                <nav className='navbar2'>
                <li>
                <Link to="About" smooth={true} duration={500} onClick={openAndCloseMenu}>
                  About
                </Link>
                </li>
                <li>
                <Link to="Skills" smooth={true} duration={500} onClick={openAndCloseMenu}>
                  Skills
                </Link>
                </li>
                <li>
                <Link to="Projects" smooth={true} duration={500} onClick={openAndCloseMenu}>
                  Projects
                </Link>
                </li>
                <li>
                <Link to="Footer" smooth={true} duration={500} onClick={openAndCloseMenu}>
                  Contacts
                </Link>
                </li>
              </nav>
              </div>
          </div>
         ) : (
         <img src={Hamb} alt="Hamb" onClick={openAndCloseMenu} className="Hamb"/>
        )
        }
        </div>
    </div>
  )
}

export default Menu