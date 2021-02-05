import React from 'react';
import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import AppTheme from './app-theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const loading = (
  <div>Loading...</div>
);

// Layouts
const AuthLayout = React.lazy(() => import('./components/layouts/AuthLayout/AuthLayout'));
const CoreLayout = React.lazy(() => import('./components/layouts/CoreLayout/CoreLayout'));


export default function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/auth" name="Auth" render={(props: any) => <AuthLayout {...props} />} />
            <Route path="/" name="Dashboard" render={(props: any) => <CoreLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
}
