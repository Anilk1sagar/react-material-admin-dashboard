import React from 'react';
import { Route, Switch, RouteProps, Redirect } from 'react-router-dom';

const loading = (
  <div>Loading...</div>
);

// Pages
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));

export default function CoreRoutes() {
  return (
    <React.Suspense fallback={loading}>
      <Switch>
        <Route exact path="/" name="Dashboard" render={(props: RouteProps) => <Dashboard {...props} />} />
        <Redirect to="/" />
      </Switch>
    </React.Suspense>
  );
}