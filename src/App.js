import React from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>

        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
