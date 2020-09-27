import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Body from './Body'
import './HomePage.scss'

const HomePage = () => {

  return (
    <>
      <Header/>
      <Banner>
        <img src='https://ucarecdn.com/2e5462d7-e919-44e1-b02b-e328cab6a863/1598250920D9Kef.jpg' alt='test banner'
          style={{width: '100%'}}
        />
      </Banner>
      <Body/>
      <Footer/>
    </>
  )
}

export default HomePage