import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Login from 'modules/users/components/Login'
import Register from 'modules/users/components/register';

export default function Routes() {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/login`}>
        <Login></Login>
      </Route>
      <Route path={`${path}/register`}>
       <Register/>
      </Route>
    </Switch>
  )
}
