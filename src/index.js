import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import HomePage from './components/home/HomePage';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <HomePage />,
  document.getElementById('app')
);

