// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import React from 'react'
import './Footer.scss'

/* type socialMediaLink = {
  link: string
  media: string
} */


/* const mockLink = [
  {
    link: '#',
    media: 'facebook'
  },
  {
    link: '#',
    media: 'shopee'
  },
  {
    link: '#',
    media: 'instagram'
  },
  {
    link: '#',
    media: 'twitter'
  },
  {
    link: '#',
    media: 'youtube'
  }
]
 */
// const facebookIcon = 'https://ucarecdn.com/59b6feb1-9b17-4d5e-a3c8-9ea86121d325/facebook.png'
// const twitterIcon = 'https://ucarecdn.com/59bb25a8-8ff5-44ff-82d7-29febd5e3f45/twitter.png'
// const instagramIcon = 'https://ucarecdn.com/bd6ef5c3-1135-48f4-99c6-db680a227bce/instagramsketched.png'
// const shopeeIcon = 'https://ucarecdn.com/07a71030-35a2-421a-a055-245ae1c64a6d/shopee64.png'
// const youtubeIcon = 'https://ucarecdn.com/e38515d5-ec10-4406-b562-f3b6351c3b61/youtube.png'

const Footer = () => {

  // const [sm, setSm] = useState<socialMediaLink[]>([])

  // fetch list from admin page
  /* function testSm () {
    setSm(mockLink)
  }

  useEffect(() => {
    testSm()
  }, []) */

/*   return (
    <div className='footer'>
      <div className='infomation'>
        <h2>INFOMATION</h2>
        <ul className='info-list'>
          <li className='info'>Contact us</li>
          <li className='info'>About us</li>
          <li className='info'>Job opportunities</li>
          <li className='info'>Sell with us</li>
          <li className='info'>Sitemap</li>
          <li className='info'>FAQs</li>
        </ul>
        <span className='cp'>Copyright © 2020 ABCDEFG. All rights reserved.</span>
      </div>

      <div className='social-list'>
        {
          sm.map((i, index) => {
            let icon;
            switch (i.media) {
              case 'facebook':
                icon = facebookIcon
                break
              case 'twitter':
                icon = twitterIcon
                break
              case 'instagram':
                icon = instagramIcon
                break
              case 'shopee':
                icon = shopeeIcon
                break
              case 'youtube':
                icon = youtubeIcon
                break
              default:
                break
            }
            return (
              <div className="image-wrapper" key={index}>
                <Link to={i.link}>
                  <img src={icon} alt={i.media}/>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  ) */
  return (
    <div className="footer">
      <div className="foot-icon-logo">
        <img src="https://ucarecdn.com/56d9df40-993f-4503-b276-00cb3aa3d2a8/bathadee.jpg" alt=""/>
      </div>
      <div className="foot-content">
        <div className="foot-menu">
          <h2>Main Menu</h2>
          <ul className="foot-menu-list">
            <li className="foot-menu-item">Men</li>
            <li className="foot-menu-item">Women</li>
            <li className="foot-menu-item">Kids</li>
            <li className="foot-menu-item">Best Seller</li>
            <li className="foot-menu-item">New</li>
          </ul>
        </div>
        <div className="foot-contact">
          <h2>Contact</h2>
          <ul className="foot-contact-list">
            <li className="foot-contact-item">Tel: 080-000-1900</li>
            <li className="foot-contact-item">Address: </li>
          </ul>
        </div>
        <div className="foot-branches">
          <h2>Branches</h2>
          <ul className="foot-branches-list">
            <li className="foot-branch-item">Branch1:</li>
            <li className="foot-branch-item">Branch2:</li>
            <li className="foot-branch-item">Branch3:</li>
            <li className="foot-branch-item">Branch4:</li>
          </ul>
        </div>
        <div className="social-media">
          <h2>Social Media</h2>
          <ul className="social-media-list">
            <li className="social-media-link">Line@</li>
            <li className="social-media-link">Facebook</li>
          </ul>
        </div>
      </div>
      <div className="cr">Copyright © 2020 ABCDEFG. All rights reserved.</div>
    </div>
  )
}

export default Footer
