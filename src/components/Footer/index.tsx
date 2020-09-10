import React, { useState, useEffect } from 'react'
import './Footer.scss'

type socialMediaLink = {
  link: string
  media: string
}

const Footer = () => {

  const [sm, setSm] = useState<socialMediaLink[]>([])

  function testSm () {
    setSm([
      {
        link: '/',
        media: 'facebook'
      }
    ])
  }

  useEffect(() => {
    testSm()
  }, [])

  return (
    <div className='footer'>
      <div className='infomation'>
        <h2>INFOMATION</h2>
        <ul className='info-list'>
          <li>Contact Us</li>
          <li>Contact Us</li>
          <li>Contact Us</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className='social-list'>
        {
          sm.map((i, index) => {
            return <span key={index}>{i['media']}</span>
          })
        }
      </div>
    </div>
  )
}

export default Footer
