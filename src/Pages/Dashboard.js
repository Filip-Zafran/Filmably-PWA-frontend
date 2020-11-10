import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link, useHistory } from 'react-router-dom';
import { ProfilePage } from '../components/Profile';
import Friends from './Friends';
import MatchPage from './MatchPage';

export default function Dashboard() {
	const history = useHistory();

	function logout() {
		localStorage.removeItem('isAuthenticated');
		history.replace('/');
	}

	return (
		<div>
			<Router>
				<br />
				<p> Dashboard </p>
				<nav>
					<ul>
						<li>
							<button onClick={logout}>Logout</button>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="/Profile">My Profile</Link>
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
					<Route path="/profile" component={ProfilePage} />
					<Route path="/Friends" component={Friends} />
					<Route path="/MatchPage" component={MatchPage} />
				</Switch>
			</Router>
		</div>
	);
}
