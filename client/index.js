import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </App>
    </Router>
  </Provider>, document.getElementById('app'));﻿
