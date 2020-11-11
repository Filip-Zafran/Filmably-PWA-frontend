import React from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import { TESTLogin } from "./Pages/TESTLogin";
import { CirclesBackground } from "./components/styleElements/CirclesBackground";
import { BottomNav } from "./components/BottomNav";

import { ShotsButton } from "./components/styleElements/buttons/ShotsButton/ShotsButton";

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <ShotsButton />
        {/* 
				<Route path="/">
					<Login />
				</Route> */}
      </Switch>
    </Router>
  );
};

export default App;
