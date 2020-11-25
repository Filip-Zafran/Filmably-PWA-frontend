import React from "react";
import "./avatar.css";
import { AvatarCircles } from "./AvatarCircles";

const Avatar = () => {
  return (
    <div className="avatarBackground">
      <AvatarCircles />
      <div className="initials">
        <h3>LM</h3>
      </div>
    </div>
  );
};

export default Avatar;
