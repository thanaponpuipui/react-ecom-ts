import React from 'react'
import './NavMenuList.scss'
import MenuLink from '../MenuLink'

type menuItem = {
  text: string
  link: string
}

type props = {
  menuItems: menuItem[]
}

const NavMenuList = ({menuItems}: props) => {
  return (
    <ul className='nav-menu-list'>
      {
        menuItems.map((item, index) => {
          return (
            <li key={index}>
              <MenuLink link={item.link} text={item.text} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default NavMenuList
