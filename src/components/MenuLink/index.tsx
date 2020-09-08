import React from 'react'
import { Link } from 'react-router-dom'

type props = {
  text?: string
  link: string
}
const MenuLink = ({text='Menu Text', link}: props) => {
  return (
    <Link to={link} className='menu'>
      {text}
    </Link>
  )
}

export default MenuLink