import React from 'react';
import './Icon.css';

export const X = ({ size }) => {
  return (
    <svg
      width={size ? size : null}
      height={size ? size : null}
      className={size ? null : 'iconSvg'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        className="inactiveIcon"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 6L18 18"
        className="inactiveIcon"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
