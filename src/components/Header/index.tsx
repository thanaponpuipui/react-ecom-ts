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
    { text: 'หมวดหมู่สินค้า', link: '/product' },
    { text: 'แบรนด์', link: '/' },
    { text: 'สินค้าลดราคา', link: '/' },
    { text: 'วิธีการรสั่งซื้อ', link: '/' },
    { text: 'ติดต่อเรา', link: '/' },
  ]

  return (
    <div className='header'>
      <TextSildeBar />
      <div className='nav'>
        {/* logo */}
        <div style={{minWidth:150, height:170, background: 'white'}}></div>
        <NavMenuList menuItems={menuItems} />
        <SearchBar search={search} searchChange={searchChange} />
        <LineDecor />
      </div>
    </div>
  )
}

export default Header
