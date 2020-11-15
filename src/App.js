import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { Profile } from './components/Profile'
import Login from './components/UserPathLog/Login';
import FindPeople from './components/Friends/FindPeople'
import OtherProfile from './components/Friends/OtherProfile';
import Registration from './components/UserPathLog/Register';
import Resetpw from './components/UserPathLog/Resetpw';
import { HashRouter, Link } from "react-router-dom";

// import Profile from './components/Profile'
// import { TestLogin } from './components/TestLogin/TestLogin';
// import { CirclesBackground } from "./components/styleElements/CirclesBackground";
// import { BottomNav } from "./components/BottomNav";


const App = () => {
	return (
		<Router>
			<Switch>
				{/* <a className="logoref" href="http://localhost:3000/welcome#/"> </a> */}
				<PrivateRoute path='/dashboard'>
					<Dashboard />
				</PrivateRoute>
				<PrivateRoute path='/profile'>
					<Profile />
				</PrivateRoute>

				<Route exact path='/findpeople'>
					<FindPeople />
				</Route>
				<Route exact path='/user/:id' component={OtherProfile} />

				<Route exact path="/" >
					<Login />
				</Route>

				<Route exact path="/register">
					<Registration />
				</Route>
				<Route exact path="/resetpw">
					<Resetpw />
				</Route>

			</Switch>
		</Router >
	);
};

export default App;
