import React from "react";
import "./avatar.css";
import { AvatarCircles } from "./AvatarCircles";

const Avatar = (props) => {
  const { size, imgSrc, firstName, lastName } = props;

  function initialFirst(firstName) {
    return console.log(firstName.CharAt(0));
  }

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
