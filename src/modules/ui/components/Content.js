import {
  Button,
  Container,
  makeStyles,
  Snackbar,
  Toolbar,
} from '@material-ui/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Routes from './Routes'
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2, 0),
  },
}))

export default function Content() {
  const classes = useStyles()
  const disPatch = useDispatch()
  const flashMessage = useSelector((state) => state.ui.flashMessage)

  const closeFlashMessage = () => disPatch(actions.clearFlashMessage())
  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar></Toolbar>
        <Routes></Routes>
        {flashMessage && (
          <Snackbar
            open
            message={flashMessage}
            action={
              <Button color="inherit" size="small" onClick={closeFlashMessage}>
                Close
              </Button>
            }
          ></Snackbar>
        )}
      </Container>
    </main>
  )
}
