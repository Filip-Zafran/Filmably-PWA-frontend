import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './Pages/Welcome.js'
import { useLocation } from "react-router-dom";


//define a variable element that will hold the different routes to be taken based on if logged in or not
let elem;
const location = useLocation();

// identify what is the current path and serve the appropriate component. Welcome is the not logged component
if (location.pathname === "/Welcome") {
	console.log("window", window)
	elem = <Welcome />
} else {
	//init(store) socket will only work if user is logged
	// serve app if user is loggedin 
	// <Provider store={store}>
	elem = <App />
	//    </Provider >
}

ReactDOM.render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>,
	elem,
	document.getElementById('root')
);

reportWebVitals();
