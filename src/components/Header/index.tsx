import React/*, { useState, ChangeEvent } */ from 'react'
import { Link } from 'react-router-dom'
import NavMenuList from '../NavMenuList'
import TextSildeBar from '../TextSlideBar'
// import SearchBar from '../SearchBar'
import LineDecor from '../LineDecor'
import './Header.scss'

const Header = () => {
  // for search functionality
  // const [search, setSearch] = useState<string>('')
  // search function
  // const searchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  const menuItems = [
    { text: 'หมวดหมู่สินค้า', hasDrop: true },
    { text: 'แบรนด์', hasDrop: true },
    { text: 'สินค้าลดราคา', hasDrop: true },
    { text: 'วิธีการสั่งซื้อ', link: '/' },
    { text: 'ติดต่อเรา', link: '/' },
  ]

  return (
    <div className="header">
      <TextSildeBar />
      <div className="nav">
        {/* logo */}
        <Link to='/'>
          <div className="icon" style={{width:170, height:170, background: 'white'}}>
            <img className="logo-icon" src="https://ucarecdn.com/56d9df40-993f-4503-b276-00cb3aa3d2a8/bathadee.jpg" alt="logo" />
          </div>
        </Link>
        <NavMenuList menuItems={menuItems} />
        {/* <SearchBar search={search} searchChange={searchChange} /> */}
        <LineDecor />
      </div>
    </div>
  )
}

export default Header
