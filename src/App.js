import React, { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Logout from '../src/Pages/Logout';
import Dashboard from '../src/Pages/Dashboard';
import Movies from '../src/Pages/Movies';
import Friends from '../src/Pages/Friends';
import MatchPage from '../src/Pages/MatchPage';

const App = () => {
	return <Headline />;
};

const Headline = () => {
	const [ loginInput, setLoginInput ] = useState(' your.email@here.de');
	const [ passwordInput, setPasswordInput ] = useState(' enter pass');

	return (
		<div className="App">
			<Router>
				<h1>NAVBAR</h1>
				<br />
				<nav>
					<ul>
						<li>
							<Link to="/Logout">Logout</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="/Dashboard">Dashboard</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="/Movies">My Movies</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="/Friends">Friends</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="/MatchPage">GO!</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/Logout" component={Logout} />
					<Route path="/Dashboard" component={Dashboard} />
					<Route path="/Movies" component={Movies} />
					<Route path="/Friends" component={Friends} />
					<Route path="/MatchPage" component={MatchPage} />
				</Switch>
			</Router>
			<br />
			<br /> <br /> <br />
			<h1>Login Page</h1>
			<br />
			<label> user name </label>
			<input type="text" value={loginInput} onChange={(event) => setLoginInput(event.target.value)} />
			<br />
			<br />
			<label> password </label>
			<input type="text" value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)} />
			<br />
			<br />
			<button> LOG IN </button>
		</div>
	);
};

export default App;

// add input in React
// https://www.robinwieruch.de/react-function-component
