import React from 'react'
import {
  AppBar,
  Badge,
  FormControlLabel,
  IconButton,
  Link,
  makeStyles,
  Switch,
  Toolbar,
} from '@material-ui/core'
import { Link as RouterLink, useHistory } from 'react-router-dom'

import logo from 'assets/images/logo.png'
import { ShoppingCart } from '@material-ui/icons'

const useStyles = makeStyles((them) => ({
  appBar: {
    zIndex: them.zIndex.drawer,
  },
  logoLink: {
    marginRight: them.spacing(2),
  },
  logoImage: {
    width: 30,
    height: 30,
  },
  spacer: {
    flexGrow: 1,
  },
}))

export default function Header() {
  const classes = useStyles()
  const history = useHistory()
  const navigateToCart = () => history.push('/cart')
  
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          underline="none"
          className={classes.logoLink}
        >
          <img src={logo} alt="Babel Shopping" className={classes.logoImage} />
        </Link>
        <Link
          component={RouterLink}
          to="/products"
          color="inherit"
          underline="none"
        >
          Products
        </Link>
        <div className={classes.spacer}></div>
        <FormControlLabel
          control={<Switch color="secondary" />}
          label="Dark"
        ></FormControlLabel>
        <IconButton color="inherit" onClick={navigateToCart}>
          <Badge badgeContent={5} color="secondary">
            <ShoppingCart></ShoppingCart>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
