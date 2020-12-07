import React from 'react'
import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@material-ui/core'

import Header from './Header'
import Content from './Content'

export default function Layout() {
  const prefersDarkMode = useMediaQuery('prefers-color-scheme: dark')
  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#1abc9c',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Content></Content>
    </ThemeProvider>
  )
}
