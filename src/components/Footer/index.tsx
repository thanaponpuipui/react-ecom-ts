import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

type socialMediaLink = {
  link: string
  media: string
}


const mockLink = [
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

const Footer = () => {

  const [sm, setSm] = useState<socialMediaLink[]>([])

  // fetch list from admin page
  function testSm () {
    setSm(mockLink)
  }

  useEffect(() => {
    testSm()
  }, [])

  return (
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
            const facebookIcon = 'https://ucarecdn.com/59b6feb1-9b17-4d5e-a3c8-9ea86121d325/facebook.png'
            const twitterIcon = 'https://ucarecdn.com/59bb25a8-8ff5-44ff-82d7-29febd5e3f45/twitter.png'
            const instagramIcon = 'https://ucarecdn.com/bd6ef5c3-1135-48f4-99c6-db680a227bce/instagramsketched.png'
            const shopeeIcon = 'https://ucarecdn.com/07a71030-35a2-421a-a055-245ae1c64a6d/shopee64.png'
            const youtubeIcon = 'https://ucarecdn.com/e38515d5-ec10-4406-b562-f3b6351c3b61/youtube.png'
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
  )
}

export default Footer
