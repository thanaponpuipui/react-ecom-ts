import React from 'react'
import './TextSlideBar.scss'

type props = {
  text?: String
}
const TextSlideBar = ({text = 'put promotion message here.'}: props) => {
  return (
    <div className='text-slide-bar'>
      <span className='scrolling'>
        {text}
      </span>
    </div>
  )
}

export default TextSlideBar