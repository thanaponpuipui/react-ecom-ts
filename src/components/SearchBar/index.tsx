import React from 'react'
import './SearchBar.scss'
import './Magnifier.scss'

// functional react element
const MagnifierGlass = () => <div className='magni'></div>

type props = {
  search: string
  searchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({search, searchChange}: props) => {
  return (
    <div className='search-bar'>
      <input type='text' value={search} onChange={searchChange} name='search' placeholder='Search...' />
      <MagnifierGlass />
    </div>
  )
}

export default SearchBar
