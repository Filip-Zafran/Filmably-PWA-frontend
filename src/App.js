import React from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './Pages/Login';
import FindPeople from './Pages/FindPeople'
import OtherProfile from './Pages/OtherProfile'
import { TestLogin } from './Pages/TESTLogin';
import { CirclesBackground } from "./components/styleElements/CirclesBackground";
import { BottomNav } from "./components/BottomNav";

const App = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute path='/dashboard'>
					<Dashboard />
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

//redo the register, login and stuff //unprotiected route login page



export default App;
