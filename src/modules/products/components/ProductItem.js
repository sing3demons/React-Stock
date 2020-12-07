import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import currencyFormate from 'utils/currencyFormat'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
  },
  footer: {
    margin: theme.spacing(2),
  },
}))

export default function ProductItem({
  id,
  image,
  name,
  desc,
  category,
  price,
}) {
  const classes = useStyles()
  const history = useHistory()
  const { path } = useRouteMatch()
  const navigateToDetails = () => history.push(`${path}/${id}`)

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card onClick={navigateToDetails}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {desc}
            </Typography>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              className={classes.footer}
            >
              <span>{currencyFormate(price)}</span>
              <Chip label={category} size="small"></Chip>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
