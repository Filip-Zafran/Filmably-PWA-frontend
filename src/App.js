import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { Profile } from './components/Profile'
import Login from './Pages/Login';
import FindPeople from './components/Friends/FindPeople'
import OtherProfile from './components/Friends/OtherProfile'
// import Profile from './components/Profile'
import { TestLogin } from './Pages/TestLogin';
import { CirclesBackground } from "./components/styleElements/CirclesBackground";
import { BottomNav } from "./components/BottomNav";

const App = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute path='/dashboard'>
					<Dashboard />
				</PrivateRoute>
				<PrivateRoute path='/profile'>
					<Profile />
				</PrivateRoute>
				{/* 
				<Route path='/'>
					<Login />
				</Route> */}
				<Route path='/findpeople'>
					<FindPeople />
				</Route>
				<Route path='/user/:id' component={OtherProfile}>

				</Route>
			</Switch>
		</Router>
	);

};

export default App;
