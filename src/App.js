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
	const [otheridtoparents, setOtherProfileID] = useState('')
	// console.log(props)
	// console.log(props.otherid)

	// console.log("otherprofileid", otherprofileid)
	const handleProfileID = (newAppID) => {
		console.log("newAppId", newAppID)
		setOtherProfileID(newAppID)


	}

	console.log("setotherprofileId", setOtherProfileID)


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
				<Route path='/users'>
					<FindPeople onChange={handleProfileID} setOtherProfileID={setOtherProfileID} />
				</Route>
				<Route path='/user/:id'>
					<OtherProfile onChange={handleProfileID} setOtherProfileID={setOtherProfileID} />
				</Route>



				{/* <PrivateRoute exact path='/friends'>
					<Friends name={otherProfileID} onChange={handleProfileID} />
					<FindPeople /> */}

				{/* </PrivateRoute> */}
				{/* <Route path='/user/:id'>
					<OtherProfile name={IDOther} onChange={setIDOther} />
				</Route> */}
				{/* <PrivateRoute>
					<FriendsButton />
				</PrivateRoute> */}
			</Switch>
		</Router >
	);
};

export default App;
