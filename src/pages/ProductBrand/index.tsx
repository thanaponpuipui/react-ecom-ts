import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import ProductFilter from '../../components/ProductFilter'
import './ProductBrandPage.scss'

const ProductBrandPage = () => {
  return (
    <>
      <Header />

      <section className="brand-show">
        Brand Logo and details
      </section>

      <main className="product-body">
        <div className="side-panel">
          <ProductFilter/>
        </div>
        <div className="content">
          <h2 className='title'>สินค้า</h2>
          <div className="item-list">
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

export default ProductBrandPage

