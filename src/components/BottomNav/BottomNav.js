import React from "react";
import { Thunder, Heart, Star } from "../styleElements/icons";
import { Link, useLocation } from "react-router-dom";
import "./BottomNav.css";
import { Ripple } from "./RippleButton";

export function BottomNav() {
  const location = useLocation();

  return (
    <div className="bottomNav">
      <Link to="/Movies">
        <Ripple classes="bottomNavButton">
          <Star active={location.pathname === "/Movies" ? true : false} />
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
          <Thunder active={location.pathname === "/MatchPage" ? true : false} />
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
          <Heart active={location.pathname === "/Friends" ? true : false} />
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
