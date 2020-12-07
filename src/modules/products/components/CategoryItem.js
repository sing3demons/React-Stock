import { Chip, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

export default function CategoryItem({ title, Icon }) {
  const history = useHistory()
  const { path } = useRouteMatch()

  const filterProductsByCategory = () => {
    history.push(`${path}?category=${title}`)
  }

  return (
    <Grid item onClick={filterProductsByCategory}>
      <Chip icon={<Icon />} label={title} clickable color="primary"></Chip>
    </Grid>
  )
}
