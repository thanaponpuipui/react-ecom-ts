import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Body from './Body'
import './HomePage.scss'

const HomePage = () => {

  useEffect(() => {
    document.title = 'Bathadee - main'
  }, [])

  return (
    <>
      <Header/>
      <Banner>
        <div className="large-banner">
          <img src='https://ucarecdn.com/2e5462d7-e919-44e1-b02b-e328cab6a863/1598250920D9Kef.jpg' alt='test banner'/>
        </div>
        <div className="small-banner">
          <img src='https://ucarecdn.com/b684d572-77da-443c-8183-9cca0d1c9a65/priscilladupreezjRjHSce08Osunsplash.jpg' alt='small size banner'/>
        </div>
      </Banner>
      <Body/>
      <Footer/>
    </>
  )
}

export default HomePage
