import React from 'react';

export const Flip = ({ size, className }) => {
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
        d="M10.8446 8.58459L16.9683 5.04906L20.5039 11.1728"
        className={className}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.20203 17.6569L8.96351 19.4686C9.98822 19.7432 11.08 19.5994 11.9988 19.069C12.9175 18.5386 13.5879 17.6649 13.8625 16.6402L16.9683 5.04906"
        className={className}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
