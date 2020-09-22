import React from 'react'
import './subMenu.scss'

export const ProductCategory = () => {
  return (
    <>
      <div className="image-slide">
        <img src="#" alt="show case banner" />
      </div>

      <div className="col1">
        <span className="title">รองเท้าผู้ชาย</span>
        <ul className="col-list">
          <li></li>
        </ul>
      </div>

      <div className="col2">
        <span className="title">รองเท้าผู้หญิง</span>
        <ul className="col-list">
          <li></li>
        </ul>
      </div>

      <div className="col3">
        <span className="title">รองเท้าเด็ก</span>
        <ul className="col-list">
          <li></li>
        </ul>
      </div>
    </>
  )
}

export const SaleProduct = () => {
  return (
    <>
      <div className="image-slide">
        <img src="#" alt="Product Sale Show" />
        <ul className="col-list">
          <li></li>
        </ul>
      </div>
    </>
  )
}

export const Brand = () => {
  return (
    <>
      <ul className="brand-list">
        <li>

        </li>
      </ul>
      <div className="image-slide">
        <img src="#" alt="brand show case"/>
      </div>
    </>
  )
}
