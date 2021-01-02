import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  AppBar,
  Badge,
  Button,
  FormControlLabel,
  IconButton,
  Link,
  Menu,
  makeStyles,
  Switch,
  Toolbar,
} from '@material-ui/core'
import { Link as RouterLink, useHistory } from 'react-router-dom'

import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import logo from 'assets/images/logo.png'
import { ShoppingCart } from '@material-ui/icons'
import MoreIcon from '@material-ui/icons/MoreVert'
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
  },
  logoLink: {
    marginRight: theme.spacing(2),
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

  const [auth, setAuth] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const history = useHistory()
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.ui.darkMode)

  const navigateToCart = () => history.push('/cart')

  const toggleDarkMode = () => dispatch(actions.toggleDarkMode())
  const cartCount = useSelector((state) => state.cart.productIds).length

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
          control={
            <Switch
              color="secondary"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
          }
          label="Dark"
        ></FormControlLabel>
        <IconButton color="inherit" onClick={navigateToCart}>
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCart></ShoppingCart>
          </Badge>
        </IconButton>
        <IconButton
          aria-label="display more actions"
          edge="end"
          color="inherit"
        >
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {auth && (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            )}
            {!auth && (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  component={RouterLink}
                  to="/users/login"
                  color="inherit"
                  underline="none"
                  onClick={handleClose}
                >
                  Login
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/users/register"
                  color="inherit"
                  underline="none"
                  onClick={handleClose}
                  onClick={handleClose}
                >
                  Register
                </MenuItem>
              </Menu>
            )}
          </div>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
