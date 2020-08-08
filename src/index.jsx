import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import './css/global.css';

if (module.hot) {
  module.hot.accept()
}

render(<App />, document.getElementById('app'))