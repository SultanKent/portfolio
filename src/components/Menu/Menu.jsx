import React, { useEffect, useState } from 'react';
import './Menu.css';
import { Link } from 'react-scroll';
import telegram from '../../assets/telegram.png';
import instagram from '../../assets/instagram.png';
import In from '../../assets/in.png';
import github from '../../assets/github.png';

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
      ];
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
          body.style.overflow = 'hidden';
        } else {
          body.style.overflow = 'auto';
        }
      }, [isOpen]);
  return (
    <div className='Menu'>
      <div className="Menu_main">
        <h1>Frontend</h1>
        {window.innerWidth > 760 ? (
          <nav className="navbar">
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
        ) : (

        <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <div className="burger-icon" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="menu-items">
        <ul className='Menu-content'>
        <nav className="navbar2">
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
        </ul>
        <div className="my-social-messengers">
                {social_messengers.map((item) => (
                  <a href={item.link} key={item.id} target="_blank" rel="noopener noreferrer">
                    <img src={item.imageSrc} alt="item.imageSrc" />
                  </a>
                ))}
        </div>
      </div>
    </div>
    )}
      </div>
    </div>
  );
};

export default Menu;