import React from "react";
import Registration from "./Register";
// import Login from "./login";
// import Resetpw from "./resetpw";
import { HashRouter, Route } from "react-router-dom";

export default function Welcome() {
    return (
        <HashRouter>
            <div>


                <p >Welcome to our App</p>
                <Route exact path="/" component={Registration} />
                {/* <Route exact path="/login" component={Login} />
                    <Route exact path="/resetpw" component={Resetpw} /> */}

            </div>

        </HashRouter>

    );

}