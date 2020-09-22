import React, { useState, useEffect } from 'react'
import './NavMenuList.scss'
import MenuLink from '../MenuLink'
import DropDownNav from '../DropDownNav'
import { ProductCategory, SaleProduct, Brand } from '../DropDownNav/subMenu'

type menuItem = {
  text: string
  link?: string
  hasDrop?: boolean
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

          function switchMenu (title: string): React.ReactElement {
            switch (title) {
              case 'หมวดหมู่สินค้า':
                return <ProductCategory/>
              case 'แบรนด์':
                return <>brand</>
              case 'สินค้าลดราคา':
                return <>on sale</>
              default:
                return <></>
            }
          }

          return (
            <li key={index} onMouseOver={select} onMouseOut={unselected}>
              <MenuLink link={item.link} text={item.text} />
              { item.hasDrop &&
                <div className={selectedMenu === item.text ? '' : 'none'}>
                  <div className="drop-line"></div>
                  <DropDownNav title={item.text}>
                    {switchMenu(item.text)}
                  </DropDownNav>
                </div>
              }
            </li>
          )
        })
      }
    </ul>
  )
}

export default NavMenuList
