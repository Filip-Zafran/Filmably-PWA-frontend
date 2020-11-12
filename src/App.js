import React from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './Pages/Login';
import FindPeople from './Pages/FindPeople';
import OtherProfile from './Pages/OtherProfile';

const App = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute path='/dashboard'>
					<Dashboard />
				</PrivateRoute>

				<Route path='/findpeople'>
					<FindPeople />
				</Route>

				<Route path='/'>
					<Login />
				</Route>

				<Route path='/user/:id' component={OtherProfile} />
			</Switch>
		</Router>
	);
};

export default App;
