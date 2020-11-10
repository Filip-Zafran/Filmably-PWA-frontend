import React from "react";

//active is true or false

export function Thunder({ active }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8889 3L4 13.8H12L11.1111 21L20 10.2H12L12.8889 3Z"
        fill={active ? "white" : "none"}
        stroke={active ? "white" : "#9D9D9D"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
