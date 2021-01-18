import React from 'react';
import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import AppTheme from './app-theme';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <div className="App">
        <p>App Works</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
