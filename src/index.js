import React from 'react';
import ReactDOM from 'react-dom';

//store and Provider are REQUIRED for redux to work
import store from './Redux/store';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let elem = (
  //the ENTIRE app MUST be mounted WITHIN the Redux provider
  //Otherwise the Redux store will not be consistantly accessable
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(elem, document.getElementById('root'));

reportWebVitals();
