import React from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import TestLogin from './Pages/TestLogin';
import { ProfilePage } from './components/Profile';

const App = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute path="/dashboard">
					<Dashboard />
				</PrivateRoute>
				<PrivateRoute path="/profile">
					<ProfilePage />
				</PrivateRoute>

				<Route path="/">
					<TestLogin />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
