import React from "react";

function MailIcon() {
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_147_470)">
          <ellipse cx="20" cy="19.9987" rx="20" ry="19.9987" fill="#D9D9D9" />
        </g>
        <path
          d="M7.1106 11.6659C7.1106 10.9292 7.39153 10.2227 7.89159 9.70184C8.39166 9.18094 9.06989 8.8883 9.77708 8.8883H31.109C31.8162 8.8883 32.4944 9.18094 32.9945 9.70184C33.4946 10.2227 33.7755 10.9292 33.7755 11.6659V28.3314C33.7755 29.0681 33.4946 29.7746 32.9945 30.2955C32.4944 30.8164 31.8162 31.109 31.109 31.109H9.77708C9.06989 31.109 8.39166 30.8164 7.89159 30.2955C7.39153 29.7746 7.1106 29.0681 7.1106 28.3314V11.6659ZM11.8023 11.6659L20.443 19.5418L29.0838 11.6659H11.8036H11.8023ZM31.109 13.5116L21.3217 22.4332C21.0785 22.6551 20.7663 22.7775 20.443 22.7775C20.1198 22.7775 19.8076 22.6551 19.5644 22.4332L9.77708 13.5116V28.3314H31.109V13.5116Z"
          fill="#0D0D0D"
        />
        <defs>
          <filter
            id="filter0_ii_147_470"
            x="-0.5"
            y="-0.5"
            width="41"
            height="41.4973"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-0.5" dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_147_470"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.5" dy="-0.5" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_147_470"
              result="effect2_innerShadow_147_470"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default MailIcon;
