import React from 'react'
import './Button.css'

const Button = ({ buttonText, onClick }) => {
  return (
    <div onClick={onClick} class="btn btn-one">
      <span>{buttonText}</span>
    </div>
  )
}

export default Button;