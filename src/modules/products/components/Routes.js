import React from 'react'
import ProductList from 'modules/products/components/ProductList'
import ProductDetails from 'modules/products/components/ProductDetails'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

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
