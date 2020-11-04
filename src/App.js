import React from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './Pages/Login';

// import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
// import Dashboard from '../src/Pages/Dashboard';

// one has to set up the input field in React through destructuring and useState Hook
const App = () => {
	// if we are logged in we render Dashboard and other components
	// if is loggedin then state is false and only renders loginpage

	return (
		<Router>
			<Switch>
				<PrivateRoute path="/dashboard">
					<Dashboard />
				</PrivateRoute>

				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;

// add input in React
// https://www.robinwieruch.de/react-function-component
