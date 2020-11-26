import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/UserPathLog/Login';
import FindPeople from './components/Friends/FindPeople';
import OtherProfile from './components/Friends/OtherProfile';
import Registration from './components/UserPathLog/Register';
import Resetpw from './components/UserPathLog/Resetpw';
import Friends from './components/Friends/Friends'



const App = () => {
	const [otheridtoparents, setOtherProfileID] = useState('')
	const handleProfileID = (newAppID) => {
		setOtherProfileID(newAppID)
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
				<Route path='/users'>
					<FindPeople onChange={handleProfileID} setOtherProfileID={setOtherProfileID} />
					{/* <Friends /> */}

				</Route>
				<Route path='/user/:id'>
					<OtherProfile onChange={handleProfileID} setOtherProfileID={setOtherProfileID} />
				</Route>
				{/* <Route path='/friends' >
					<Friends />
				</Route> */}
			</Switch>
		</Router >
	);
};

export default App;
