import React from 'react';
import ReactDOM from 'react-dom';

//store and Provider are REQUIRED for redux to work
import store from './Redux/store';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './Pages/Welcome.js';
// import { useLocation } from "react-router-dom";

//define a variable element that will hold the different routes to be taken based on if logged in or not
let elem;
// const location = useLocation();

// identify what is the current path and serve the appropriate component. Welcome is the not logged component
if (window.location.pathname === '/Welcome') {
  // console.log("window", window)
  elem = <Welcome />;
} else {
  //init(store) socket will only work if user is logged
  // serve app if user is loggedin
  elem = (
    //the ENTIRE app MUST be mounted WITHIN the Redux provider
    //Otherwise the Redux store will not be consistantly accessable
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(
  // <React.StrictMode>
  // 	<App />
  // </React.StrictMode>,
  elem,
  document.getElementById('root')
);

reportWebVitals();
