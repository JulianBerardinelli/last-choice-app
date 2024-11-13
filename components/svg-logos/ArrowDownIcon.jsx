import * as React from "react";

const ArrowDownIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    {...props}
  >
    <style>
      {`
        .slide-11 {
          animation: slide-11 1s infinite alternate both cubic-bezier(1, -0.01, 0, 0.98);
        }
        @keyframes slide-11 {
          100% {
            transform: translateY(2px);
          }
        }
      `}
    </style>
    <path
      className="slide-11"
      fill="#bfdbfe"
      d="M6.832 10.516a.857.857 0 111.097-1.317l4.594 3.828L17.117 9.2a.857.857 0 011.098 1.317l-5.132 4.276a.853.853 0 01-.933.123.85.85 0 01-.187-.123l-5.131-4.276z"
    />
  </svg>
);

export default ArrowDownIcon;
