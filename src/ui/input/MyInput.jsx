import React from 'react'
import './MyInput.css'

const MyInput = () => {
  return (
    <form>
        <div class="group">      
          <input type="text" required/>
          <span class="highlight"></span>
          <span class="bar_input"></span>
          <label>Your Name</label>
        </div>
        <div class="group">      
          <input type="text" required/>
          <span class="highlight"></span>
          <span class="bar_input"></span>
          <label>Your Email</label>
        </div>
        <div class="group">      
          <input type="text" required/>
          <span class="highlight"></span>
          <span class="bar_input"></span>
          <label>Your Message</label>
        </div>
    </form>
  )
}

export default MyInput