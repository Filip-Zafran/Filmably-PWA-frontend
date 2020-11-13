import React from "react";
import Registration from "./UserPathLog/Register";
import Resetpw from "./UserPathLog/Resetpw";
import { HashRouter, Route } from "react-router-dom";
import Login from "./UserPathLog/Login";

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
