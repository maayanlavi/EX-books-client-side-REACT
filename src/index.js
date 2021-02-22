import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactRouter from './Router/routes'

ReactDOM.render(
  <Router>
    <ReactRouter />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
