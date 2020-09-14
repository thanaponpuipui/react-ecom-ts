import React, { useState, useEffect } from 'react'
import './NavMenuList.scss'
import MenuLink from '../MenuLink'
import DropDownNav from '../DropDownNav'

type menuItem = {
  text: string
  link: string
}

type props = {
  menuItems: menuItem[]
}

const NavMenuList = ({menuItems}: props) => {

  const [selectedMenu, setSelectedMenu] = useState<string>('')

  useEffect(() => {
    console.log(selectedMenu)
  }, [selectedMenu])

  return (
    <ul className='nav-menu-list'>
      {
        menuItems.map((item, index) => {
          function select () {
            setSelectedMenu(item.text)
          }
          function unselected () {
            setSelectedMenu('')
          }
          return (
            <li key={index} onMouseOver={select} onMouseOut={unselected}>
              <MenuLink link={item.link} text={item.text} />
              <div className={selectedMenu === item.text ? '' : 'none'}>
                <div className="drop-line"></div>
                <DropDownNav title={item.text}>
                  test
                </DropDownNav>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default NavMenuList
