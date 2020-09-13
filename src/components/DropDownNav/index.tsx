import React from 'react'
import './DropDownNav.scss'

type props = {
  title: string
  children: React.ReactNode
}

const DropDownNav = ({children, title}: props) => {
  return (
    <div className="dd-nav">
      {children}
      <div className="title-banner">
        {title}
      </div>
    </div>
  )
}

export default DropDownNav
