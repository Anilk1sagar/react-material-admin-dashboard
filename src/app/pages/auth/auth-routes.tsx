import React from 'react';
import { Route, Switch, RouteProps, Redirect } from 'react-router-dom';

const loading = (
  <div>Loading...</div>
);

// Pages
const Login = React.lazy(() => import('./Login/Login'));
const Register = React.lazy(() => import('./Register/Register'));

export default function AuthRoutes() {
  return (
    <React.Suspense fallback={loading}>
      <Switch>
        <Route path="/login" name="Login" render={(props: RouteProps) => <Login {...props} />} />
        <Route path="/register" name="Register" render={(props: RouteProps) => <Register {...props} />} />
        <Redirect to="/login" from="/auth" />
      </Switch>
    </React.Suspense>
  );
}