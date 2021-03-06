import React from 'react';
import logo from './logo.svg';
import './App.css';

import { DemoComponent, ThemeProvider, Button } from '@hydrogen-ui-kit/core';

const theme = {
  primary: 'green',
  secondary: '#ff0',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider value={theme}>
          <DemoComponent />
          <Button color="secondary">Hello World</Button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
