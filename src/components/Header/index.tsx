import React, { useState, ChangeEvent } from 'react'
import NavMenuList from '../NavMenuList'
import TextSildeBar from '../TextSlideBar'
import SearchBar from '../SearchBar'
import LineDecor from '../LineDecor'
import './Header.scss'

const Header = () => {

  const [search, setSearch] = useState<string>('')

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  const menuItems = [
    { text: 'หมวดหมู่สินค้า', link: '/', hasDrop: true },
    { text: 'แบรนด์', link: '/', hasDrop: true },
    { text: 'สินค้าลดราคา', link: '/', hasDrop: true },
    { text: 'วิธีการรสั่งซื้อ', link: '/' },
    { text: 'ติดต่อเรา', link: '/' },
  ]

  return (
    <div className="header">
      <TextSildeBar />
      <div className="nav">
        {/* logo */}
        <div className="icon" style={{minWidth:170, height:170, background: 'white'}}></div>
        <NavMenuList menuItems={menuItems} />
        <SearchBar search={search} searchChange={searchChange} />
        <LineDecor />
      </div>
    </div>
  )
}

export default Header
