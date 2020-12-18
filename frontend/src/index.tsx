import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from './App';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
