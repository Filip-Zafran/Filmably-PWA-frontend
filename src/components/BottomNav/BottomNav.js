import React from "react";
import {
  Thunder,
  Heart,
  HeartActive,
  Star,
  StarActive,
} from "../styleElements/icons";
import { Link, useLocation } from "react-router-dom";
import "./BottomNav.css";
import { Ripple } from "./RippleButton";

export function BottomNav() {
  const location = useLocation();

  return (
    <div className="bottomNav">
      <Link to="/Movies">
        <Ripple classes="bottomNavButton">
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
        </Ripple>
      </Link>
      <Link to="/MatchPage">
        <Ripple classes="bottomNavButton">
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
        </Ripple>
      </Link>
      <Link to="/Friends">
        <Ripple classes="bottomNavButton">
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
        </Ripple>
      </Link>
    </div>
  );
}
