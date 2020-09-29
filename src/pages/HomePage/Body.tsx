import React from 'react'
import ProductCard from '../../components/ProductCard'

const Body = () => {
  return (
    <main>
      <h2 style={{color:'red'}}>Special Deal!</h2>
      <div className="deal-card-list">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </main>
  )
}

export default Body
