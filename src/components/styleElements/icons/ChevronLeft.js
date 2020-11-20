import React from 'react';
import './Icon.css';

export function ChevronLeft({ size, className }) {
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
        className={className ? className : 'inactiveIcon'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
