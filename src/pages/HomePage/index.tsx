import React from 'react'
import TextSlideBar from '../../components/TextSlideBar'
import NavMenuList from '../../components/NavMenuList'
// import SearchBar from '../../components/SearchBar'
// import RedLineDecor from '../../components/RedLineDecor'

const HomePage = () => {
  return (
    <>
      <header>
        <TextSlideBar />
        <div className='nav'>
          <div className='logo'>

          </div>
          <NavMenuList/>
        </div>
      </header>
    </>
  )
}

export default HomePage