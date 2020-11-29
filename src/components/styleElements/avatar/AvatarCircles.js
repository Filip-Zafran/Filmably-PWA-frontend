import React from 'react';
import './avatar.css';

export const AvatarCircles = () => {
  return (
    <svg
      className="SvgCircle"
      width="700"
      height="700"
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circleBig" cx="350" cy="350" r="350" fill="#0E0E0E" />
      <circle
        className="circleMedium"
        cx="350"
        cy="350"
        r="250"
        fill="#161616"
      />
      <ellipse
        className="circleSmall"
        cx="350"
        cy="350"
        rx="150"
        ry="150"
        fill="#202020"
      />
    </svg>
  );
};
