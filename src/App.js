<<<<<<< HEAD
import React from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import TestLogin from './Pages/TestLogin';
import { ProfilePage } from './components/Profile';
=======
import React from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import { TESTLogin } from "./Pages/TESTLogin";
import { CirclesBackground } from "./components/styleElements/CirclesBackground";
import { BottomNav } from "./components/BottomNav";
>>>>>>> main

const App = () => {

	return (
		<Router>
			<Switch>
				<PrivateRoute path="/dashboard">
					<Dashboard />
				</PrivateRoute>
<<<<<<< HEAD
				<PrivateRoute path="/profile">
					<ProfilePage />
				</PrivateRoute>

				<Route path="/">
					<TestLogin />
				</Route>
=======
				{/* 
				<Route path="/">
					<Login />
				</Route> */}
>>>>>>> main
			</Switch>
		</Router>
	);
};

export default App;
