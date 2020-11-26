import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Friends from '../Friends/Friends';
import FindPeople from '../Friends/FindPeople';
import { MatchPage } from '../MatchPage';
import { Profile } from '../Profile/Profile';
import { ProfileEdit } from '../Profile/ProfileEdit';
import { LikedMovies } from '../Profile/LikedMovies';
import { TopMatches } from '../Profile/TopMatches';
import { Start } from '../Start/Start';
import { BottomNav } from '../BottomNav';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Router>
        <BottomNav />
        <Switch>
          <Route path="/dashboard/Profile" component={Profile} />
          <Route path="/dashboard/ProfileEdit" component={ProfileEdit} />
          <Route path="/dashboard/LikedMovies" component={LikedMovies} />
          <Route path="/dashboard/TopMatches" component={TopMatches} />
          <Route path="/dashboard/users" component={FindPeople} />
          <Route path="/dashboard/matchPage" component={MatchPage} />
          <Route path="/dashboard" component={Start} />
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
