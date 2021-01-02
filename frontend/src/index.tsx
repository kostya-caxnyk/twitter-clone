import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from './App';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CurrentUserChecker from './utils/CurrentUserChecker';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <CurrentUserChecker>
          <App />
        </CurrentUserChecker>
      </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
