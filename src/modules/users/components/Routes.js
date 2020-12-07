import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'


export default function Routes() {
    const { path } = useRouteMatch()
    return (
      <Switch>
        <Route path={`${path}/:id`}>
          <ProductDetails></ProductDetails>
        </Route>
        <Route path={path}>
          <ProductList></ProductList>
        </Route>
      </Switch>
    )
  }