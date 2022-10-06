import React from "react";

interface mailIconProps {
  onClick?: () => any;
  className?: string;
}

function MailIcon(props: mailIconProps) {
  return (
    <div onClick={props.onClick}>
      <svg
        className={props.className}
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_0_1)">
          <ellipse
            cx="18.5"
            cy="18.4988"
            rx="18.5"
            ry="18.4988"
            fill="#D9D9D9"
          />
        </g>
        <path
          d="M28.7906 9H7.51937C7.11641 9 6.72995 9.16008 6.44501 9.44501C6.16008 9.72995 6 10.1164 6 10.5194V25.7131C6 26.1161 6.16008 26.5025 6.44501 26.7875C6.72995 27.0724 7.11641 27.2325 7.51937 27.2325H28.7906C29.1936 27.2325 29.58 27.0724 29.865 26.7875C30.1499 26.5025 30.31 26.1161 30.31 25.7131V10.5194C30.31 10.1164 30.1499 9.72995 29.865 9.44501C29.58 9.16008 29.1936 9 28.7906 9ZM27.6207 25.7131H8.78046L14.0983 20.213L13.0043 19.157L7.51937 24.8319V11.6741L16.9623 21.0714C17.247 21.3544 17.6321 21.5133 18.0335 21.5133C18.4348 21.5133 18.8199 21.3544 19.1046 21.0714L28.7906 11.4386V24.7331L23.1993 19.1418L22.1282 20.213L27.6207 25.7131ZM8.51457 10.5194H27.5599L18.0335 19.9927L8.51457 10.5194Z"
          fill="#0D0D0D"
        />
        <defs>
          <filter
            id="filter0_ii_0_1"
            x="-0.5"
            y="-0.5"
            width="38"
            height="38.4975"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              result="effect1_innerShadow_0_1"
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
              in2="effect1_innerShadow_0_1"
              result="effect2_innerShadow_0_1"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default MailIcon;
