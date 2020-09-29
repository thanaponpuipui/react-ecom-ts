import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import './ProductPage.scss'

const ProductPage = () => {
  return (
    <>
      <Header />

      <main className="product-body">
        <div className="side-panel"></div>
        <div className="content">
          <h2 className='title'>สินค้า</h2>
          <div className="item-list">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ProductPage
