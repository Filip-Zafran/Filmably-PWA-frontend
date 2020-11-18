import React from 'react';
import './Icon.css';

export function ChevronRight({ size }) {
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
        d="M9 18L15 12L9 6"
        className="inactiveIcon"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
