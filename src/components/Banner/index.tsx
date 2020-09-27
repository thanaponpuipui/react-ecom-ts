import React from 'react'
import './Banner.scss'

type props = {
  children: React.ReactNode
}

const Banner = ({children}: props) => {
  return (
    <div className="banner">
      {children}
    </div>
  )
}

export default Banner
