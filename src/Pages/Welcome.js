import React from "react";
import Registration from "./Register";
import Resetpw from "./Resetpw";
import { HashRouter, Route } from "react-router-dom";
import Login from "./Login";

export default function Welcome() {
  return (
    <HashRouter>
      <div>
        <p>Welcome to our App</p>
        <Route exact path="/" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/resetpw" component={Resetpw} />
      </div>
    </HashRouter>
  );
}
