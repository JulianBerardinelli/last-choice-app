import * as React from "react";

const ArrowRightIcon = (props) => (
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
        .slide-6 {
          animation: slide-6 1s infinite alternate both cubic-bezier(1, -0.01, 0, 0.98);
        }
        @keyframes slide-6 {
          100% {
            transform: translateX(2px);
          }
        }
      `}
    </style>
    <path
      className="slide-6"
      fill="#FFFFFF"
      fillRule="evenodd"
      d="M13.155 16.834a.714.714 0 001.006-.091l3.564-4.277a.711.711 0 000-.932L14.16 7.257a.714.714 0 00-1.097.915l2.565 3.078H7.9a.75.75 0 000 1.5h7.73l-2.565 3.078a.714.714 0 00.091 1.006z"
      clipRule="evenodd"
    />
  </svg>
);

export default ArrowRightIcon;
