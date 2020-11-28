import React from 'react';
import './Icon.css';

//NOT A SQUARE ICON!! You can manually change the size

export function Check({ width, height }) {
  return (
    <svg data-testid="check"
      width={width ? width : 18}
      height={height ? height : 13}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 1L6 12L1 7"
        className="activeLogo"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
