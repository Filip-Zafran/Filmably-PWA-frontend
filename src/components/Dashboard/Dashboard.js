import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Movies from './Movies';
import Friends from '../Friends/Friends';
import { MatchPage } from '../MatchPage';
import { Profile } from '../Profile/Profile';
// import { ProfileEdit } from '../Profile/ProfileEdit';
import { Start } from '../Start/Start';
import store from '../../Redux/store';
import { BottomNav } from '../BottomNav';
import { fetchUser } from '../../Redux/userSlice';

const Dashboard = () => {
	//gets the logged in user and stores it in the REDUX store
	useEffect(() => {
		store.dispatch(fetchUser());
	}, []);

	return (
		<div className='dashboard'>
			<Router>
				<BottomNav />
				<Switch>
					<Route path="/profile" component={Profile} />
					<Route path="/friends" component={Friends} />
					<Route path="/matchPage" component={MatchPage} />
					<Route path="/" component={Start} />
				</Switch>
			</Router>
		</div>
	);
};

export default Dashboard;
