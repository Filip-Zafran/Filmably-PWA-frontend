import React from 'react';

export const Filter = ({ className, size }) => {
  return (
    <svg
      className={size ? null : 'iconSvg'}
      width={size ? size : null}
      height={size ? size : null}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19"
        className={className ? className : 'inactiveIcon'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 6H21"
        className={className ? className : 'inactiveIcon'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 18H16"
        className={className ? className : 'inactiveIcon'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
