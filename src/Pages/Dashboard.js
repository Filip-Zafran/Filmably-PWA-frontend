import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
} from "react-router-dom";
import Movies from "./Movies";
import Friends from "./Friends";
import MatchPage from "./MatchPage";
import "./Dashboard.css";
import BottomNav from "../components/common/BottomNav";

export default function Dashboard() {
  const history = useHistory();

  function logout() {
    localStorage.removeItem("isAuthenticated");
    history.replace("/");
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Movies" component={Movies} />
          <Route path="/Friends" component={Friends} />
          <Route path="/MatchPage" component={MatchPage} />
        </Switch>
        <BottomNav />
      </Router>
    </div>
  );
}
