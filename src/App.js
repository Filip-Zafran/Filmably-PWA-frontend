<<<<<<< HEAD
import React from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './Pages/Login';
import FindPeople from './Pages/FindPeople'
=======
import React from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
>>>>>>> main

import { TestLogin } from "./Pages/TestLogin";
import { CirclesBackground } from "./components/styleElements/CirclesBackground";
import { BottomNav } from "./components/BottomNav";

const App = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute path="/dashboard">
					<Dashboard />
				</PrivateRoute>
<<<<<<< HEAD
				{/* 
				<Route path="/">
					<Login />
				</Route> */}
				<Route path="/findpeople">
					<FindPeople />
				</Route>
=======

				<Login />
>>>>>>> main
			</Switch>
		</Router>
	);
};

export default App;
