import React from 'react'
import './MenuLink.scss'
import { Link } from 'react-router-dom'

type props = {
  text?: string
  link?: string
}

const Menu = ({text}: {text:string}) => {

  return (
    <span className="menu-text">
      <span className="text">
        {text}
      </span>
      <div className="first ll"></div>
      <div className="second ll"></div>
      <div className="third ll"></div>
    </span>
  )
}

const MenuLink = ({text='Menu Text', link}: props) => {
  if (!link) {
    return (
      <div className='menu'>
        <Menu text={text}/>
      </div>
    )
  } else {
    return (
      <Link to={link} className='menu'>
        <Menu text={text}/>
      </Link>
    )
  }
}

export default MenuLink