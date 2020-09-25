import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: 340,
    marginTop: '2rem',
    marginBottom: '2rem'
  },
});

const ExCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="example image"
          height="300"
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
  );
}

const Body = () => {
  return (
    <main>
      <h2>Special Deal!</h2>
      <div className="deal-card-list">
        <ExCard/>
        <ExCard/>
        <ExCard/>
        <ExCard/>
      </div>
    </main>
  )
}

export default Body
