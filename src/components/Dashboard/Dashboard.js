import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Friends from '../Friends/Friends';
import { MatchPage } from '../MatchPage';
import { Profile } from '../Profile/Profile';
import { ProfileEdit } from '../Profile/ProfileEdit';
import { LikedMovies } from '../Profile/LikedMovies';
import { TopMatches } from '../Profile/TopMatches';
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
					<Route path='/Profile' component={Profile} />
					<Route path='/ProfileEdit' component={ProfileEdit} />
					<Route path='/LikedMovies' component={LikedMovies} />
					<Route path='/TopMatches' component={TopMatches} />
					<Route path='/Friends' component={Friends} />
					<Route path='/MatchPage' component={MatchPage} />
					<Route path='/' component={Start} />
				</Switch>
			</Router>
		</div>
	);
};

export default Dashboard;
