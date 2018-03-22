import React from 'react';
import { Route, Redirect } from 'react-dom';


export const PrivateRoute = ({ component: Component, ...rest })=> (
  <Route {...rest} render={prop => (
    localStorage.getItem('user')
    ? <Component {...props} />
    : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)
