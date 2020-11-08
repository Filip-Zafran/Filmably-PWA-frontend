import React from "react";
import { Thunder, Heart, HeartActive, Star, StarActive } from "./icons";
import { Link, useLocation } from "react-router-dom";
import "./BottomNav.css";

function BottomNav() {
  const location = useLocation();

  return (
    <div className="bottomNav">
      <Link to="/Movies">
        {location.pathname === "/Movies" ? <StarActive /> : <Star />}
        <p
          className={
            location.pathname === "/Movies"
              ? "bottomNav__activeLabel"
              : "bottomNav__label"
          }
        >
          My Lists
        </p>
      </Link>
      <Link to="/MatchPage">
        <Thunder
          fill={location.pathname === "/MatchPage" ? "white" : "none"}
          stroke={location.pathname === "/MatchPage" ? "white" : "#9D9D9D"}
        />
        <p
          className={
            location.pathname === "/MatchPage"
              ? "bottomNav__activeLabel"
              : "bottomNav__label"
          }
        >
          Shots
        </p>
      </Link>
      <Link to="/Friends">
        {location.pathname === "/Friends" ? <HeartActive /> : <Heart />}
        <p
          className={
            location.pathname === "/Friends"
              ? "bottomNav__activeLabel"
              : "bottomNav__label"
          }
        >
          Friends
        </p>
      </Link>
    </div>
  );
}

export default BottomNav;
