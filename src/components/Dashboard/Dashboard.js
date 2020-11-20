import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Movies from './Movies';
import Friends from '../Friends/Friends';
import { MatchPage } from '../MatchPage';
import { Profile } from '../Profile/Profile';
//import { ProfileEdit } from '../Profile/ProfileEdit';
import { Start } from '../Start';
import { FilterPage } from '../FilterPage';
import { BottomNav } from '../BottomNav';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Router>
        <BottomNav />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/friends" component={Friends} />
          <Route path="/matchPage" component={MatchPage} />
          <Route path="/filter" component={FilterPage} />
          <Route path="/dashboard" component={Start} />
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
