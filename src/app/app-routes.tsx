import React from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';

const loading = (
  <div>Loading...</div>
);

// Layouts
const AuthLayout = React.lazy(() => import('./layouts/AuthLayout/AuthLayout'));
const CoreLayout = React.lazy(() => import('./layouts/CoreLayout/CoreLayout'));

export default function AppRoutes() {
  return (
    <React.Suspense fallback={loading}>
      <Switch>
        <Route exact path="/auth" name="Auth" render={(props: RouteProps) => <AuthLayout {...props} />} />
        <Route path="/" name="Dashboard" render={(props: RouteProps) => <CoreLayout {...props} />} />
      </Switch>
    </React.Suspense>
  );
}