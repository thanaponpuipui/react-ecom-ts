import React from 'react'
import './NavMenuList.scss'
import MenuLink from '../MenuLink'

type props = {
  
}

const NavMenuList = () => {
  return (
    <ul className='nav-menu-list'>
      <li>
        <MenuLink link=''/>
      </li>
    </ul>
  )
}

export default NavMenuList