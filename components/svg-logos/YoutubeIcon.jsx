import * as React from "react";

const YoutubeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 40}
    height={props.height || 40}
    fill="none"
    {...props}
  >
    <defs>
      <style>
        {`
          @keyframes youtube {
            0% { transform: translateZ(-10px) translateX(-10px); opacity: 0; }
            30%, 50%, 80% { transform: translateZ(0) translateX(0); opacity: 1; }
            100% { transform: translateZ(10px) translateX(10px); opacity: 0; }
          }
        `}
      </style>
    </defs>
    <path
      fill="#FFFFFF"
      fillRule="evenodd"
      d="M13.246 11.693a.645.645 0 010 1.054l-2.23 1.574A.645.645 0 0110 13.794v-3.148c0-.523.59-.828 1.017-.527l2.229 1.574z"
      clipRule="evenodd"
      style={{ animation: "youtube 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both" }}
    />
    <path
      fill="#FF0000"
      fillRule="evenodd"
      d="M16.613 6.666a41.132 41.132 0 00-9.226 0l-1.155.13c-1.052.119-1.847 1.022-1.847 2.096v6.216c0 1.074.795 1.977 1.847 2.096l1.155.13c3.066.346 6.16.346 9.226 0l1.155-.13c1.052-.119 1.847-1.022 1.847-2.096V8.892c0-1.074-.795-1.977-1.847-2.096l-1.155-.13zM7.234 5.268a42.495 42.495 0 019.531 0l1.156.13C19.674 5.596 21 7.101 21 8.892v6.216c0 1.79-1.326 3.296-3.08 3.494l-1.155.13a42.484 42.484 0 01-9.53 0l-1.156-.13C4.326 18.404 3 16.899 3 15.108V8.892c0-1.79 1.326-3.296 3.08-3.494l1.154-.13z"
      clipRule="evenodd"
    />
  </svg>
);

export default YoutubeIcon;
