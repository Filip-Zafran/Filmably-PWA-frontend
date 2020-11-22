import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
// import { Profile } from './components/Profile';
import Login from './components/UserPathLog/Login';
import FindPeople from './components/Friends/FindPeople';
import OtherProfile from './components/Friends/OtherProfile';
import Registration from './components/UserPathLog/Register';
import Resetpw from './components/UserPathLog/Resetpw';
import Friends from './components/Friends/Friends.js'
// import { HashRouter, Link } from "react-router-dom";
// import FriendsButton from './components/Friends/FriendsButton.js'
// import Profile from './components/Profile'
// import { TestLogin } from './components/TestLogin/TestLogin';
// import { CirclesBackground } from "./components/styleElements/CirclesBackground";
// import { BottomNav } from "./components/BottomNav";


const App = (props) => {
	const [otherProfileID, setOtherProfileID] = useState()
	const [IDOther, setIDOther] = useState()

	const handleProfileID = (newAppID) => {

		setOtherProfileID(newAppID)
		setIDOther(newAppID)

	}

	return (
		<Router>
			<Switch>
				<Route exact path="/" >
					<Login />
				</Route>

				<Route exact path="/register">
					<Registration />
				</Route>
				<Route exact path="/resetpw">
					<Resetpw />
				</Route>
				<PrivateRoute path='/dashboard'>
					<Dashboard />
				</PrivateRoute>
				{/* <PrivateRoute path='/profile'>
					<Profile />
				</PrivateRoute> */}

				<PrivateRoute exact path='/findpeople'>
					<FindPeople />
				</PrivateRoute>

				<PrivateRoute exact path='/friends'>
					<Friends name={otherProfileID} onChange={handleProfileID} />
				</PrivateRoute>
				<PrivateRoute exact path='/user/:id'>
					<OtherProfile name={IDOther} onChange={setIDOther} />
				</PrivateRoute>
				{/* <PrivateRoute>
					<FriendsButton />
				</PrivateRoute> */}
			</Switch>
		</Router >
	);
};

export default App;
