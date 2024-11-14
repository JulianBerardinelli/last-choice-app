import * as React from "react";

const CourseIcon = (props) => (
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
          @keyframes rotate-clockwise {
            0% { transform: rotate(0); }
            100% { transform: rotate(360deg); }
          }
          @keyframes rotate-counterclockwise {
            0% { transform: rotate(0); }
            100% { transform: rotate(-360deg); }
          }
        `}
      </style>
    </defs>
    <path
      stroke="#00FF00"
      strokeWidth=".8"
      d="M7.157 7.157h10v10h-10z"
      style={{
        animation: "rotate-clockwise 3s linear infinite both",
        transformOrigin: "center center",
      }}
    />
    <path
      stroke="#00FFFF"
      strokeWidth=".8"
      d="M12 5.151l7.071 7.071L12 19.293l-7.071-7.071z"
      style={{
        animation: "rotate-counterclockwise 3s linear infinite both",
        transformOrigin: "center center",
      }}
    />
  </svg>
);

export default CourseIcon;
