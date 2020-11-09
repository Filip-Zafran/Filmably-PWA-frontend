import React from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import TestLogin from "./Pages/TestLogin";
import BottomNav from "./components/common/BottomNav";
import { RippleButton } from "./components/common/buttons/RippleButton";

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>

        <Route path="/">
          <TestLogin />
          <RippleButton />
          <BottomNav />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
