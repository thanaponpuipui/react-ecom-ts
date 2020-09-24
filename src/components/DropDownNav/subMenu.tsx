import React from 'react'
import { Link } from 'react-router-dom'
import './subMenu.scss'

interface linkItem  {
  link: string
}

interface shoesLink extends linkItem {
  type: string
}
interface brandLink extends linkItem {
  name: string
}

interface priceSaleLink extends linkItem {
  percent: number
}

interface listLink extends linkItem {
  text: string | number
}

const NormalList = ({text, link}: listLink) => <li className="normal-list"><Link to={link}>{text}</Link></li>

export const ProductCategory = () => {

  const menshoes:shoesLink[]  = [
    {
      type: 'แตะสวม',
      link: ''
    },
    {
      type: 'แตะคีบ',
      link: ''
    },
    {
      type: 'ผ้าใบ',
      link: ''
    },
    {
      type: 'ฟองน้ำ',
      link: ''
    },
    {
      type: 'รัสส้น',
      link: ''
    },
    {
      type: 'PU/PVC/AIRBLOW',
      link: ''
    },
    {
      type: 'บูต',
      link: ''
    },
    {
      type: 'คัชชู',
      link: ''
    },
    {
      type: 'หัวเหล็ก',
      link: ''
    },
    {
      type: 'ลิขสิทธิ์',
      link: ''
    }
  ]
  const womenshoes:shoesLink[] = [
    {
      type: 'แตะสวม',
      link: ''
    },
    {
      type: 'แตะคีบ',
      link: ''
    },
    {
      type: 'ผ้าใบ',
      link: ''
    },
    {
      type: 'ฟองน้ำ',
      link: ''
    },
    {
      type: 'รัสส้น',
      link: ''
    },
    {
      type: 'PU/PVC',
      link: ''
    },
    {
      type: 'แฟชั่น',
      link: ''
    },
    {
      type: 'คัชชู',
      link: ''
    },
    {
      type: 'ลิขสิทธิ์',
      link: ''
    }
  ]
  const kidshoes:shoesLink[] = [
    {
      type: 'แตะสวม',
      link: ''
    },
    {
      type: 'แตะคีบ',
      link: ''
    },
    {
      type: 'ผ้าใบ',
      link: ''
    },
    {
      type: 'รัสส้น',
      link: ''
    },
    {
      type: 'PU/PVC',
      link: ''
    },
    {
      type: 'แฟชั่น',
      link: ''
    },
    {
      type: 'ลิขสิทธิ์',
      link: ''
    }
  ]
  
  return (
    <>
      <div className="image-slide">
        <img src="#" alt="show case banner" />
      </div>

      <div className="col1">
        <span className="title">รองเท้าผู้ชาย</span>
        <ul className="col-list">
          <li className="all">ทั้งหมด</li>
          {
            menshoes.map((item, index) => {
              return <NormalList key={index} text={'รองเท้า' + item.type} link={item.link} />
            })
          }
        </ul>
      </div>

      <div className="col2">
        <span className="title">รองเท้าผู้หญิง</span>
        <ul className="col-list">
          <li className="all">ทั้งหมด</li>
          {
            womenshoes.map((item, index)=> {
              return <NormalList key={index} text={'รองเท้า' + item.type} link={item.link} />
            })
          }
        </ul>
      </div>

      <div className="col3">
        <span className="title">รองเท้าเด็ก</span>
        <ul className="col-list">
          <li className="all">ทั้งหมด</li>
          {
            kidshoes.map((item, index)=> {
              return <NormalList key={index} text={'รองเท้า' + item.type} link={item.link} />
            })
          }
        </ul>
      </div>
    </>
  )
}

export const SaleProduct = () => {
  const salePrice:priceSaleLink[] = [
    {
      percent: 15,
      link: ''
    },
    {
      percent: 20,
      link: ''
    },
    {
      percent: 25,
      link: ''
    },
    {
      percent: 30,
      link: ''
    },
    {
      percent: 35,
      link: ''
    },
    {
      percent: 40,
      link: ''
    },
    {
      percent: 45,
      link: ''
    },
    {
      percent: 50,
      link: ''
    },
    {
      percent: 55,
      link: ''
    },
    {
      percent: 60,
      link: ''
    },
  ]
  return (
    <>
      <div className="image-slide">
        <img src="#" alt="Product Sale Show" />
        <ul className="col-list">
          <li className="all">ทั้งหมด</li>
          {
            salePrice.map((price, index) => {
              return <NormalList text={price.percent} link ={price.link} key={index} />
            })
          }
        </ul>
      </div>
    </>
  )
}

export const Brand = () => {

  const bList: brandLink[] = [
    {
      name: 'ADDA',
      link:''
    },
    {
      name:'AB-Walk'
      ,link:''
    },
    {
      name:'Pekq',
      link:''
    },
    {
      name: 'Kito',
      link:''
    },
    {
      name: 'Gambol',
      link: ''
    },
    {
      name: 'Apple',
      link: ''
    },
    {
      name: 'Footniks',
      link: ''
    },
    {
      name: 'Y-Roons',
      link: ''
    },
    {
      name: 'Macropony',
      link: ''
    },
    {
      name: 'Leo',
      link: ''
    },
    {
      name: 'Mashare',
      link: ''
    },
    {
      name: 'Kento',
      link: ''
    },
    {
      name: 'Kenta (สมชายการค้า)',
      link: ''
    },
    {
      name: 'Shooro',
      link: ''
    },
    {
      name: 'BB Double',
      link: ''
    },
    {
      name: 'Giga',
      link: ''
    },
    {
      name: 'Aerosoft',
      link: ''
    },
    {
      name: 'Sunsang',
      link: ''
    },
    {
      name: 'Aera',
      link: ''
    }
  ]

  return (
    <>
      <ul className="brand-list">
        {
          bList.map((brand, index) => {
            return <NormalList link={brand.link} text={brand.name} key={index} />
          })
        }
      </ul>
      <div className="image-slide">
        <img src="#" alt="brand show case"/>
      </div>
    </>
  )
}
