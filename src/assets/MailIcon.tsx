import React from "react";

interface mailIconProps {
  onClick?: () => any;
  className?: string;
}

function MailIcon(props: mailIconProps) {
  return (
    <div onClick={props.onClick} className={props.className}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_255_272)">
          <ellipse
            cx="9.87215"
            cy="9.87149"
            rx="9.87215"
            ry="9.87149"
            fill="#F1F3F5"
          />
        </g>
        <path
          d="M14.6833 13.3778V7.84444C14.6833 7.84444 10.2774 11.7485 9.84893 11.9511C9.4277 11.7577 5 7.84444 5 7.84444V13.3778C5 14.1463 5.1283 14.3 5.72625 14.3H13.9571C14.5693 14.3 14.6833 14.165 14.6833 13.3778ZM14.6763 6.7596C14.6763 6.19981 14.5478 6 13.9571 6H5.72625C5.11862 6 5 6.23978 5 6.79926L5.00726 6.88533C5.00726 6.88533 9.38147 10.7095 9.84893 10.9185C10.3428 10.6757 14.6833 6.79926 14.6833 6.79926L14.6763 6.7596Z"
          fill="#9B6A6C"
        />
        <defs>
          <filter
            id="filter0_ii_255_272"
            x="-0.5"
            y="-0.5"
            width="20.7443"
            height="21.243"
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
              result="effect1_innerShadow_255_272"
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
              in2="effect1_innerShadow_255_272"
              result="effect2_innerShadow_255_272"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default MailIcon;
