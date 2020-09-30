import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import './ProductFilter.scss'
import './Arrow.scss'

const Arrow = () => <div className="arrow"></div>

const ProductFilter = () => {
  
  const [filterSelected, setFilter] = useState<number>(-1)
  
  const clickFilter = (num: number): void => {
    if (num === filterSelected) {
      setFilter(-1)
      return
    }
    setFilter(num)
  }

  return (
    <div className="product-filter">
      <h2 className="title">ตัวกรอง</h2>
      <div className="price-filter">

        <table className="price-table">
          <thead>
            <tr><th>ช่วงราค้าราคาสินค้า</th><th></th></tr>
          </thead>
          <tbody>
            <tr>
              <td>0-30</td>
              <td><Checkbox/></td>
            </tr>
            <tr>
              <td>31-40</td>
              <td><Checkbox/></td>
            </tr>
            <tr>
              <td>41-60</td>
              <td><Checkbox/></td>
            </tr>
            <tr>
              <td>61-100</td>
              <td><Checkbox/></td>
            </tr>
            <tr>
              <td>101-150</td>
              <td><Checkbox/></td>
            </tr>
            <tr>
              <td>151-up</td>
              <td><Checkbox/></td>
            </tr>
          </tbody>
        </table>

        <div className="price-custom">
          <div className="price-input">
            <input className="price-start" type="number"/>-
            <input className="price-end" type="number"/>
          </div>
          <Button variant="contained" >submit</Button>
        </div>
      </div>

      <div className="cat-filter">
        <div className="title">ประเภทสินค้า</div>
        <ul className='filter-list'>
          {
            [
              'สินค้าใหม่ (new)',
              'สินค้าขายดี (best seller)',
              'สินค้าลดล้างสต๊อก (clearance)',
              'รองเท้าผู้ชาย',
              'รองเท้าผู้หญิง',
              'รองเท้าเด็ก'
            ].map((item, index) => {
              const unselected = <li className='type-item' onClick={() => clickFilter(index)} key={index}>{item}</li>
              const selected = <li className='type-item selected' onClick={() => clickFilter(index)} key={index}><Arrow/>{item}</li>
              return filterSelected === index ? selected : unselected
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default ProductFilter
