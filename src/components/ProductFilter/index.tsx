import React from 'react'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'

const ProductFilter = () => {
  return (
    <div className="product-filter">
      <h2 className="title">ตัวกรอง</h2>
      <div className="price-filter">

        <table className="price-table">
          <thead>
            <tr><th>ช่วงราค้าราคาสินค้า</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>0-30</td>
              <td><input type="checkbox" name="priceFilter"></input></td>
            </tr>
            <tr>
              <td>31-40</td>
              <td><input type="checkbox" name="priceFilter"></input></td>
            </tr>
            <tr>
              <td>41-60</td>
              <td><input type="checkbox" name="priceFilter"></input></td>
            </tr>
            <tr>
              <td>61-100</td>
              <td><input type="checkbox" name="priceFilter"></input></td>
            </tr>
            <tr>
              <td>101-150</td>
              <td><input type="checkbox" name="priceFilter"></input></td>
            </tr>
            <tr>
              <td>151-up</td>
              <td><input type="checkbox" name="priceFilter"></input></td>
            </tr>
          </tbody>
        </table>

        <div className="price-custom">
          <input className="price-start" type="number"/>-
          <input className="price-end" type="number"/>
          <Button variant="contained" >submit</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter
