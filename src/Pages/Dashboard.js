import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { BottomNav } from '../components/BottomNav';
import store from '../Redux/store';
import { fetchUser } from '../Redux/userSlice';

import { Start } from './Start';
import Friends from './Friends';
import MatchPage from './MatchPage';
import { Profile } from '../components/Profile';

const Dashboard = () => {
  //gets the logged in user and stores it in the REDUX store
  useEffect(() => {
    store.dispatch(fetchUser());
  }, []);

  return (
    <div className="dashboard">
      <Router>
        <BottomNav />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/Friends" component={Friends} />
          <Route path="/MatchPage" component={MatchPage} />
          <Route path="/" component={Start} />
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
