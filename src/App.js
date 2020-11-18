import React, { useState } from 'react';
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
import Friends from './components/Friends/Friends.js'
import { HashRouter, Link } from "react-router-dom";

// import Profile from './components/Profile'
// import { TestLogin } from './components/TestLogin/TestLogin';
// import { CirclesBackground } from "./components/styleElements/CirclesBackground";
// import { BottomNav } from "./components/BottomNav";


const App = (props) => {
	console.log("props in app", props)
	const [otherProfileID, setOtherProfileID] = useState({})
	const [IDOther, setIDOther] = useState({})

	const handleProfileID = (newAppID) => {
		// console.log("otherprofileID", typeof (otherProfilID))
		setOtherProfileID(newAppID)
		// console.log("props in handlechange", setIDOther(newAppID))
		// props.onChange(newAppID)
		// props.onChange(newAppID)
	}

	const sendToOtherProfile = (newAppID) => {
		console.log("I am the visited profile ID in APP", newAppID)

		setIDOther(newAppID)
		props.onChange(newAppID)


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

				<Route exact path='/findpeople'>
					<FindPeople />
				</Route>

				<Route exact path='/friends'>
					<Friends name={otherProfileID} onChange={handleProfileID} />
				</Route>
				<Route exact path='/user/:id'>
					<OtherProfile name={IDOther} onChange={sendToOtherProfile} />
				</Route>

			</Switch>
		</Router >
	);
};

export default App;
