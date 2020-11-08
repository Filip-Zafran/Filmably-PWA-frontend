import React from "react";
import {
  Thunder,
  ThunderActive,
  Heart,
  HeartActive,
  Star,
  StarActive,
} from "./icons";
import { Link, useLocation } from "react-router-dom";

function BottomNav() {
  const location = useLocation();

  return (
    <div className="bottomNav">
      <Link to="/Movies">
        {location.pathname === "/Movies" ? <StarActive /> : <Star />}
      </Link>
      <Link to="/MatchPage">
        {location.pathname === "/MatchPage" ? <ThunderActive /> : <Thunder />}
      </Link>
      <Link to="/Friends">
        {location.pathname === "/Friends" ? <HeartActive /> : <Heart />}
      </Link>
    </div>
  );
}

export default BottomNav;
