import * as React from "react";

const GrammarIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 14v-4a2 2 0 1 1 4 0v4"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 12h-4"
    />
  </svg>
);

export default GrammarIcon;
