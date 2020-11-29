// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

import { Route, Redirect } from 'react-router-dom';
import React from 'react';

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem('isAuthenticated') === 'true' ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;

// https://reactrouter.com/web/example/auth-workflow
