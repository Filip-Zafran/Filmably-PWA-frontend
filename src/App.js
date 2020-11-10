import React from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

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
				{/* 
				<Route path="/">
					<Login />
				</Route> */}
			</Switch>
		</Router>
	);
};

export default App;
