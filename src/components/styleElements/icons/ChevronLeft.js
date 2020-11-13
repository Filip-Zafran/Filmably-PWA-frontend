import React from 'react';
import './Icon.css';

export function ChevronLeft({ size }) {
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
        d="M15 18L9 12L15 6"
        className="inactiveIcon"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
