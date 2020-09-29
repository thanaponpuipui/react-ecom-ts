import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import './ProductCard.scss'

const ProductCard = () => {
  

  return (
    <Card className='product-card'>
      <CardActionArea>
        <CardMedia
          className='product-image'
          component="img"
          alt="example image"
          image="https://ucarecdn.com/fa297ebd-50d8-4dcf-add4-821ba8af2b51/photoofalandscape.png"
          title="example title here"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Product Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            price and discount
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard
