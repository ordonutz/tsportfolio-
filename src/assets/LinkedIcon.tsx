import React from "react";
interface linkedIconProps {
  onClick?: () => any;
  className?: string;
}
function LinkedIcon(props: linkedIconProps) {
  return (
    <div onClick={props.onClick} className={props.className}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_254_260)">
          <path
            d="M10.0006 20.4362C15.4529 20.4362 19.8728 16.0163 19.8728 10.5641C19.8728 5.11182 15.4529 0.691911 10.0006 0.691911C4.54839 0.691911 0.128479 5.11182 0.128479 10.5641C0.128479 16.0163 4.54839 20.4362 10.0006 20.4362Z"
            fill="#F1F3F5"
          />
        </g>
        <path
          d="M13.6335 14.1989L12.1681 14.1989L12.1681 11.9044C12.1681 11.3568 12.1565 10.653 11.4045 10.653C10.641 10.653 10.5234 11.2488 10.5234 11.8639L10.5234 14.1989L9.05797 14.1989L9.05797 9.47874L10.4655 9.47874L10.4655 10.1227H10.4848C10.6815 9.75254 11.1597 9.36112 11.8731 9.36112C13.3578 9.36112 13.6316 10.3387 13.6316 11.6094L13.6335 14.1989ZM7.40553 8.83281C6.93314 8.83281 6.55522 8.45103 6.55522 7.98249C6.55522 7.51395 6.93506 7.13218 7.40553 7.13218C7.87601 7.13218 8.25585 7.51395 8.25585 7.98249C8.25585 8.45103 7.87408 8.83281 7.40553 8.83281ZM8.14016 14.1989L6.67091 14.1989L6.67091 9.47874L8.14016 9.47874L8.14016 14.1989ZM14.3662 5.76897L5.93628 5.76897C5.53329 5.76897 5.20551 6.08712 5.20551 6.48239L5.20551 14.947C5.20551 15.3403 5.53136 15.6604 5.93628 15.6604L14.3643 15.6604C14.7672 15.6604 15.097 15.3423 15.097 14.947L15.097 6.48239C15.097 6.08712 14.7672 5.76897 14.3662 5.76897Z"
          fill="#9B6A6C"
        />
        <defs>
          <filter
            id="filter0_ii_254_260"
            x="-0.871521"
            y="-0.308089"
            width="21.7443"
            height="21.7443"
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
            <feOffset dx="-1" dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_254_260"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="-1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_254_260"
              result="effect2_innerShadow_254_260"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default LinkedIcon;
