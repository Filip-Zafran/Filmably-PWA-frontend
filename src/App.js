import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { Profile } from './components/Profile';
import Login from './components/UserPathLog/Login';
import FindPeople from './components/Friends/FindPeople';
import OtherProfile from './components/Friends/OtherProfile';
import Registration from './components/UserPathLog/Register';
import Resetpw from './components/UserPathLog/Resetpw';
import { HashRouter } from 'react-router-dom';

import { MatchPage } from './components/MatchPage';

// import Profile from './components/Profile'
// import { TestLogin } from './components/TestLogin/TestLogin';
// import { CirclesBackground } from "./components/styleElements/CirclesBackground";
// import { BottomNav } from "./components/BottomNav";

const App = () => {
  return (
    <Router>
      <Switch>
        {/*<a className="logoref" href="http://localhost:3000/welcome#/"> </a>*/}
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        {/* 
				<Route path='/'>
					<Login />
				</Route> */}
        <Route path="/findpeople">
          <FindPeople />
        </Route>
        <Route path="/user/:id" component={OtherProfile} />

        <Route path="/findpeople">
          <FindPeople />
        </Route>
        {/* <HashRouter> */}
        <Route path="/">
          <MatchPage />
        </Route>
        {/* <Route exact path="/register" component={Registration}> Register </Route>
				<Route exact path="/resetpw" component={Resetpw}> Reset PW</Route> */}
        {/* </HashRouter> */}
        {/* add Register and Reset PW */}
        {/* <Route path="/user/:id" component={OtherProfile}></Route> */}
      </Switch>
    </Router>
  );
};

export default App;
