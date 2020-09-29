import React, { useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import NavMenuList from '../NavMenuList'
import TextSildeBar from '../TextSlideBar'
import SearchBar from '../SearchBar'
import LineDecor from '../LineDecor'
import './Header.scss'

const Header = () => {

  const [search, setSearch] = useState<string>('')

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  const menuItems = [
    { text: 'หมวดหมู่สินค้า', hasDrop: true },
    { text: 'แบรนด์', hasDrop: true },
    { text: 'สินค้าลดราคา', hasDrop: true },
    { text: 'วิธีการรสั่งซื้อ', link: '/' },
    { text: 'ติดต่อเรา', link: '/' },
  ]

  return (
    <div className="header">
      <TextSildeBar />
      <div className="nav">
        {/* logo */}
        <Link to='/'><div className="icon" style={{minWidth:170, height:170, background: 'white'}}></div></Link>
        <NavMenuList menuItems={menuItems} />
        <SearchBar search={search} searchChange={searchChange} />
        <LineDecor />
      </div>
    </div>
  )
}

export default Header
