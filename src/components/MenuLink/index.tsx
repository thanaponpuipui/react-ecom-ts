import React from 'react'
import './MenuLink.scss'
import { Link } from 'react-router-dom'

type props = {
  text?: string
  link: string
}
const MenuLink = ({text='Menu Text', link}: props) => {
  return (
    <Link to={link} className='menu'>
      <span className="menu-text">
        <span className="text">
          {text}
        </span>
        <div className="first ll"></div>
        <div className="second ll"></div>
        <div className="third ll"></div>
      </span>
    </Link>
  )
}

export default MenuLink