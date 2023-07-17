import React from 'react'
import Menu from '../Menu/Menu'
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
        <div className="Header_main">
            <Menu/>
            <div className="Header_title">
                <h1>Kuanishev Sultan<br/>I am a <span>Developer</span></h1>
                <p>Hi, I'm Sultan. A passionate Front and React Developer based in Kazakhstan</p>
                <button className='btn header_btn'>Connect me</button>
            </div>
        </div>
    </div>
  )
}

export default Header