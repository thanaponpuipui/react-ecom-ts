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
  percent: number | string
}

interface listLink extends linkItem {
  text: string | number
}

const NormalList = ({text, link}: listLink) => <li className="normal-list">
  <Link to={link}>{text}</Link></li>

const ListAll = ({link}: {link:string}) => <li className="all"><Link to={link}>ทั้งหมด</Link></li>

export const ProductCategory = () => {

  const menshoes:shoesLink[]  = [
    {
      type: 'แตะสวม',
      link: '1'
    },
    {
      type: 'แตะคีบ',
      link: '2'
    },
    {
      type: 'ผ้าใบ',
      link: '2'
    },
    {
      type: 'ฟองน้ำ',
      link: '2'
    },
    {
      type: 'รัสส้น',
      link: '2'
    },
    {
      type: 'PU/PVC/AIRBLOW',
      link: '2'
    },
    {
      type: 'บูต',
      link: '2'
    },
    {
      type: 'คัชชู',
      link: '2'
    },
    {
      type: 'หัวเหล็ก',
      link: '2'
    },
    {
      type: 'ลิขสิทธิ์',
      link: '2'
    }
  ]
  const womenshoes:shoesLink[] = [
    {
      type: 'แตะสวม',
      link: '1'
    },
    {
      type: 'แตะคีบ',
      link: '1'
    },
    {
      type: 'ผ้าใบ',
      link: '1'
    },
    {
      type: 'ฟองน้ำ',
      link: '1'
    },
    {
      type: 'รัสส้น',
      link: '1'
    },
    {
      type: 'PU/PVC',
      link: '1'
    },
    {
      type: 'แฟชั่น',
      link: '1'
    },
    {
      type: 'คัชชู',
      link: '1'
    },
    {
      type: 'ลิขสิทธิ์',
      link: '1'
    }
  ]
  const kidshoes:shoesLink[] = [
    {
      type: 'แตะสวม',
      link: '1'
    },
    {
      type: 'แตะคีบ',
      link: '1'
    },
    {
      type: 'ผ้าใบ',
      link: '1'
    },
    {
      type: 'รัสส้น',
      link: '1'
    },
    {
      type: 'PU/PVC',
      link: '1'
    },
    {
      type: 'แฟชั่น',
      link: '1'
    },
    {
      type: 'ลิขสิทธิ์',
      link: '1'
    }
  ]
  
  return (
    <>
      <div className="image-slide prod">
        <img src="data:image/png;base64,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" alt="show case banner" />
      </div>

      <div className="pro-col col">
        <span className="title">รองเท้าผู้ชาย</span>
        <ul className="col-list">
          <ListAll link='/product/men/all'/>
          {
            menshoes.map((item, index) => {
              return <NormalList key={index} text={'รองเท้า' + item.type} link={"/product/men/" + item.link} />
            })
          }
        </ul>
      </div>

      <div className="pro-col col">
        <span className="title">รองเท้าผู้หญิง</span>
        <ul className="col-list">
          <ListAll link='/product/women/all'/>
          {
            womenshoes.map((item, index)=> {
              return <NormalList key={index} text={'รองเท้า' + item.type} link={"/product/women/" + item.link} />
            })
          }
        </ul>
      </div>

      <div className="pro-col col">
        <span className="title">รองเท้าเด็ก</span>
        <ul className="col-list">
          <ListAll link='/product/kid/all'/>
          {
            kidshoes.map((item, index)=> {
              return <NormalList key={index} text={'รองเท้า' + item.type} link={"/product/kid/" + item.link} />
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
    {
      percent: '60^',
      link: ''
    }
  ]
  return (
    <>
      <div className="image-slide">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAqFBMVEX///8AAAD+/v77+/v4+PgEBATi4uLx8fHZ2dnd3d3m5ub09PTu7u7r6+vU1NTKyspGRkaSkpJtbW1BQUGsra85OTm/v79wb3V5eH5cXFydnZ24ubukpacwMDCAgYPHx8dwcHBNTU2JiYmAf4R4eHhmZmYqKiqJiI6Yl52lpKq3trwQEBCfn5+xsLbDwseFhYUbGxsjIyNmZWuQj5aXl5agn6alp6bU19X1u1fIAAARcUlEQVR4nO1ca2PaOLOWJWFjG0MghBZMYmAhvYQm3W2a/v9/duYi2fIVsm+354ue3SYgj0bzaKTRSLYjhIeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4fHuyDV8HWlLgiwFqmlfG+bUqnr6/xbSHWBodLXEUz1ewhKxh8hqIcFriMotHqHB38zZDKbAsbTWdo2QomH/pECfazn4kIPCBrGyctFfqBNoFC0el0/BoDRzWEFyifoT0eOze3DRLQa0sltQHjtGBJSfF+KvtEF7Z7vL9LDuSRegslFOQ1yyXYd1LB7CZSuMZwcgwHM2hy0LKC3RsFd2jXm4+BR941CpSZPT5fnFhDMguBwSQzoxTvy3IhtHcEn/ChqLpSRWOOFTgTBuM1BqYK03aiugJIHwVtnoCQ9L0EwvTgHQesDtJCKoWkI17Kjw4qZwsdRIOtjVIvXbudRvXGXpTO6ftPZPFAYdc5BbDSBam+X+AFBlAuOQ0sO9GFuzXwaMbcRMwxawvOKf8uF47atgwTlHXThpttsJRZwcXeRoBA08oJwcDDvjAtK/5Vo2TsfmIPvJTjBQfM97SQoZ2jN7eVlImFXHNoBroReG3ch1q+rJJtk43y+HyL4dFw0sNu/iyDGnBVNiVfRjjOwQN7RnMkGyaGjTwFbnsluilrpG1KF/98u3XVHFbtA69rsLQnedajKi3bAGPTggee8bldTQJ6sKi4QlKEZe8FDjwuVXJiIEjwVSjhSmGZkjSTIIdiIWpj7pO8hCPXv7ehqD0R9zwRfBwmC+lM5uZIONYh5QBEFVj3oSTevUArcp+pRdICgklq3l61+gorCJFmX1fMVTBOXAftlPxz+1dgGvABc2GKIaXhMbcC/M3mv4a9m0QDB8seVBKUobHB6aJotlY13I9EztQgYaqvYmHQkg0rszRydD2q6TLC3Qj/Bg+GHo6th94Gtgh9hz8BjTINq3YZ+as9lDsaAk5B/nOC+JHisZaRKhHbZCoJVb76NcZjif3A6Ms+kxQAlWFcKo/UPE5yU/DDJcya/hshRoi84UlibQu2npyAObT81rcI8FfCE6cRgKmcv/kaC5gKbtnBHl5pW/AaiDDsQ/jsJcbRDvSn8xhe+R2J4f2ub/30Epc1qeQWOrTrszBs7qxBRX9ezA0EK6maUSAe7lqwZCztR5fppfaZijXCYoBQdm9lLBAXTsBnU2pbC0rSyqT5d6kiPGMp0xBrz7CNrCpuGfGdzl45Fs30jpumXUxkDujIZyPvXvYdD/QS1UWTcODPysAjekzeCe44c/RsKs8yMcbFOWMuuEZJUYGWqIlg6/76/u7e4g5Ri0fbgqBK4fYSc+P0enBn712za3rYP04acsS9Y4KFZscSeHYinHhI2hSTd2FTEhqATpGW1tJRYlDPUEmyI3Pae+vQQhEE1Zz8liRmohUwl5oeRaWDKH4LvXXMQsibYSY94BmLvc7gc0XLnyFuCro5xk14XwQZuenebfQRpgQJ+jxr2auSxGzO6DqVHH03vd+mFqXrPayDvdLWtVw+k/48EI/JfcMIdOZ0dBDlZkZjREUtrcueGgvboSHAqaf4bz/Na2Cbo7jn/HcH3zUHoD1zrwL43QdMHGd7QOfCCv0C0kDmb3Lnl1/KGhvjaZJgwD+cmkLq7Szvex04i6q6ypjcvErztPcHt8aCiVRAdUKY0I3QhRgDOuiCaGp+su9TKFbc8q0oy7ppFLe17YrG3GsE8pU2SKpvrIHgntD0B1zq/0b2rcTdBLfbcfTSgzJL/BLzXbCXkzVoqlrnvHP48QddWLd7FeGUXjl2C5iD01iEYh8BGWeP6CdpRqWCVn+r3eRASX+sdaFgrs7Iv6RADip8i6GLNYxdz6MYujk7JyNHTWq/9HZhAaitIk6rhMqvMbgJ+mW0vTIhrCKIXxXsXemkmAs0vXvrAtL/1d2famWMLjD6qSVDfkWXfzxsH2z3XnjpHiIkZ/nup27sJa9wwwWH0LfRbbnfG9qaP7BCzOaWDNjpvITSPNMC3S15EmxhZF1abg7Vx4RI5/DGC0s6NCL9pJVfm3IQXjCUNMhgVzPu2MUBgTD/ZJLZ20MlnE0/oQjt/JB2sm2P3psn/IUFtYkRZcO8YeV/mRXymGzQ9CA4MrN21k2dz+nnCVYM6SdojC9gxJSLVTUX/2RCN7eCzwaBwCFanj3z0RKuYCztVu8AVtB2PdDrA5U8xJYN/huCWDVlZy7GjLb+bakSatGZZ1yk2Zsau23jiA5gqZEoz3Ucjp7n/liCepZwCWoHDaq5My2OYWVWbAj+2X9VWlJSNqCM68MY737EsJ5zEvSLzDnaZ4AUekyb4oYaWicYOCQaF6rjX1+VBmBg8lL6XvlLlCa6buEg+FaRlumpInHmuFe3kAkzm4bgW5TwGw9bl4fDTPKMeppvnfPOAPF4tepbgbavvpAg77g92eVDCFCS9u5IgRH4zV+q3BDdc5mzBtZ6wA+/Q9GZrmlZ2CqRlhVRLc+rGEWg50dwZ6Wpn5uzecZch+FismjiPOm5XdhAEUkseSG/l/hv187YJs2xRduc0aI5axRaQAzsOeqW6o9GPhxBmGir4yJmvXVMe17vFYv23DUtQ+gp6SdvvuH1Gd4SM3W4F2vlClu0uyGYb69yhkBlbue8KAbgsmMg7dfTIVIwfu24OlgSDg6ROltVx9P9AUEfmKCitS+Jx9otdwkwZr497R27HBDp3iRRabk2V6iQbo4PejvpWFvD3FD3Iwu/0oFZM8FbYISCFNg4MYjdSSZxcQSala5ji/BnSUdaGazw7ou/Auxz/uLYY9Rg1lYjOTw3HGb4PcXmoKG1cu5agTJV5LmMlNe+8dfFo5e8SXbHRuN9pbG5VOV4eMjqYSF5sQd63f0nNcyvBy0Q3bo3J1e7R9K0ld7fLU3eiRNsBfl0PIaji/hZwc7tPVEo+mN3f39wyHl9SZ6Jgcp3Uu2h8d7Pf7+Hfzf0BCaUvj1iAZeu+e7/5/sRr/u1bWn8GBrtoerx7tI4c3d8eptSy0+L9voQ1s8RjM6VCQqJYL06L0y5lNbj+5Gu85Q2FS1omym2X2Kw3tdAoVXxiHGMS0yI+nqAiIO0KMoQtXl6cjqGQ9Q2EjDenNVzBxkFisYOf6/Vmaja/3AnR4tSPsN0arHmn3W63OLiFq8UHxD+1waF0+M+HD2HteSHIQha7HfzLSsnJDkoA/c8hfgU1H3aLzNnE08Qez5HU7kMNYNrpIY+wpyW3uGT9DTnCqX37Cpf/3REwd8q0PHxE/FO7/6/E549/ffxcy5CUeMDKx6URxPRktsOyXe/Ne026d7mz/8PAnMx3R1L20QV8fziCgXkkLcGc7G3IMXZhiyB8D48PgI27TIj841+IcX0AYdHH2HWNnGDdh+PMjlz8NX/BsnlfkPlKul8i534gBNHV8YGqPTxgIwQygcughdKDq2Mp18Sx24MPB8DZLQMunwB/VfsiCNPqM5Z92tSG6JgqHzJXIZe9zLrSfa0mn1i1MzyhS88vB4OHl8N2RY8U5tvDgy1NhLDqCiM6b+AwPxxb93aIIIluawT1px+ff/z4saxyXJirn34gDs5aA9tE0v3qeBX4b7lx0X7OFwJZjko+/ahGP5RFm0Np5NIeuoFKHbOqQ+6sqgXLnqnTHWgV5WE7+4UMbP4KcAmCuV8+I17L+7owiLjo8+ubGz2W883r63zpjAwYeeEcVR5m7VwUTJqjkh8z5WyXJmfQATXmm3k+wXmMF/GREi3ZuLl7rDWjotfaTS1zQqp1+wQfZvfmfD5vlrUFVxQ/EZtJOURF/Pm8PZ9/ns+v42qp0F9IrJazwsclqtxuo7SN1QbVnO2Onqig+HZz3myWITWOVmIL8Cn7TIasnNtnUyzY/ly2bwnLjuweCYIp221evxT+/AI4x7ZUqeWW8fb2VnXThMWay0+yHQAoePtVhRdIX8yF80rXD3fwIUtq4GdRI4hFX/K+o+wW62y7BDQIpl++fPv2bVkdvMdvSwswzzY3JrFta7Lly2GUd6mBX/jGqrcz2XiIHwmC/uW3LzWCX5Zo2jsIkvpVvVg9f0MtK8UjRarc2Jwv4ZO2jZHUt2ZbUk0sE6iVW5jvgF82wuDOPTfFhWoOMfg2oQa+VXMAgjQXNc9vegmKjFp/bpRPvwLy3Oyt5Th38cseGH0lzJrTQYlZPgQnwRWhKXvumD5SRN9MC9XVMTf6fLUHJzlu9+uJB8zMr8/PX1d5JnjLjSJgRUiyK8NbRNjQ89e4seJBh0zyfJVTlRq4diycNaIgzas87ThOoRaeoYVpxUbGOZQ85x0nPn0EoYXnYlYvVgq1rFYxtzNdFUXxvJqJ8YqOQn6ZXngmRE2CXAPqFzrFvayBmq6en4tV4e6YI9QMOmNHhZMCRNxCjSAXzcR1DJWMitmsKKbNCzNEwbuVtMDPRRGJtGCkdPQ1pqpFV1qNWuFi5lqhuawWc8OCdVcLOe5+y49GTezMwZAanU3Lh4Po5lL/HV4ZEZU6QZCOqXhG2yXzGc8NQv44psVqysWdumNzzbk45ro1W0xZ7BRpJ/HTsylfrryazBoG46WOBxkdgvTqS6NUZFg6m+ImODJvm6S4KvPHWYRZCZfHnXpTlnON5ar152KtOtfRszBjTCbJ1DRRDdHEvuVSIQvHvQSVSDuslGzOr1+/MD+PXcuy6ZjkwYMZl0edemVIguXcUqgGSsaqNmqNtS5nW0b4RagcBBO/652eeIjgGNFwA/gqHo9/jX/BDiua4vV4bKZJTPJjoJXwp559kZ6i5DSy2xxuB18vcgmyitphkZ6Om0icOZi1rqJ5QwRjRDPbggSAy5VMxvTJPuAS8VfYmcSMzjdj8MURvDgOefWGuWOlXVOU0VE7OohbyFyC7ctkTQ9B6Nk4BNRPk/ALl8eafiNT6wpjaaRZIOlUi5EtDkmO2zbq0npwV1xas0+FVOggdoNxFochkzJicVNBA5qksvZxVJjgBZjByD+0749JrJAgsYj1979YNgm560h1xl8a7laGguooc+ASnJiypLqcJP1RFN8tQrQJyowuJCH/qtYmsJUKzfW0b8GVKjQC2F0s3HycRSa23CGYZJGDVEdJNXEh6psq6aSSmfwbgsJqypBKFSph7FGJIZipXoKgASQzeuVlwopaOzZWlbg3CWTjJQZ68E3UCOIaUhPq7WVUx0tOx/lJklWoncSkzoWOilZMKryeZeA2xcLtgGtUXX6BslRa1rguF8W9DSJqi6tqIZ3Uh5Z0Ftn+vgNnadYNPPoaIYloMuk9RW0qNTonzQS4v4biYdyRy1dDHDaoNQtUNfx7HxKjoziqPVEK58skajlQlo1cfhfY1BDaTM1rCbKxafsdOkjL7DRPm6/2lK2k0fBLrjpKMUykHC267r+avkqvdiE2jUqvlMdn2QhdbduToubjK/iel8WFtwE0ykR8/NTZF1bTlW/aQ98a+avE6Twixb1a51uQZh/X7F06oUv50sAIFdxJJEXSnW+2YF+hyJUMS43XEsSRqHXne2n2iu76Qw12Hzs8suhpzlT3tGBkqg3xVQbblq+OotxA1/MX0ujq2k3aa8Ot8OOqwwTFZYlO8d9AEHXxK4udQwtrXSJIcsOSsmJ41Z/+eCdBuj1ef/HSuUgEexTx/YCLrZQ3EPoJiur+Qu3kUHYcVctSuEmwS1o4BLuN0wOGXUdQDHRgQ8T2hEVXNdkQrqOXYN+fNuljzjXJmIsE2aJrZK4x+d8QlD3OpXaHGFzwS62Jq4RMnw150JVskOv9CzQDBgxbdo3hV6ipG9LEVUIX3OQJDhh0jeHvQNPa30LQw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw+Mq/B+8NktgS0vYdQAAAABJRU5ErkJggg==" alt="Product Sale Show" />
      </div>
      <ul className="sale-list col">
        <ListAll link=''/>
        {
          salePrice.map((price, index) => {
            return <NormalList text={price.percent} link ={price.link} key={index} />
          })
        }
      </ul>
    </>
  )
}

export const Brand = () => {

  const bList: brandLink[] = [
    {
      name: 'ADDA',
      link:'1'
    },
    {
      name:'AB-Walk'
      ,link:'1'
    },
    {
      name:'Pekq',
      link:'1'
    },
    {
      name: 'Kito',
      link:'1'
    },
    {
      name: 'Gambol',
      link: '1'
    },
    {
      name: 'Apple',
      link: '1'
    },
    {
      name: 'Footniks',
      link: '1'
    },
    {
      name: 'Y-Roons',
      link: '1'
    },
    {
      name: 'Macropony',
      link: '1'
    },
    {
      name: 'Leo',
      link: '1'
    },
    {
      name: 'Mashare',
      link: '1'
    },
    {
      name: 'Kento',
      link: '1'
    },
    {
      name: 'Kenta (สมชายการค้า)',
      link: '1'
    },
    {
      name: 'Shooro',
      link: '1'
    },
    {
      name: 'BB Double',
      link: '1'
    },
    {
      name: 'Giga',
      link: '1'
    },
    {
      name: 'Aerosoft',
      link: '1'
    },
    {
      name: 'Sunsang',
      link: '1'
    },
    {
      name: 'Aera',
      link: '1'
    }
  ]

  return (
    <>
      <ul className="brand-list col">
        {
          bList.map((brand, index) => {
            return <NormalList link={"/product-brand/" + brand.link} text={brand.name} key={index} />
          })
        }
      </ul>
      <div className="image-slide">
        <img src="data:image/png;base64,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" alt="brand show case"/>
      </div>
    </>
  )
}
