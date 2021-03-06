import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ProductRoutes from 'modules/products/components/Routes'
import CartRoutes from 'modules/cart/components/Routes'
import UsersRuoutes from 'modules/users/components/Routes'

export default function Routes() {
  return (
    <Switch>
      <Route path="/products">
        <ProductRoutes></ProductRoutes>
      </Route>
      <Route path="/cart">
        <CartRoutes></CartRoutes>
      </Route>
      <Route exact path="/">
        <Redirect to="/products"></Redirect>
      </Route>
      <Route path="/users">
        <UsersRuoutes></UsersRuoutes>
      </Route>
      <Route>
        <div>page not found</div>
      </Route>
    </Switch>
  )
}
