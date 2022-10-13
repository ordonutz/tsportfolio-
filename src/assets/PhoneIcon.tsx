import React from "react";

function PhoneIcon() {
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_145_419)">
          <ellipse cx="20" cy="19.9994" rx="20" ry="19.9994" fill="#D9D9D9" />
        </g>
        <path
          d="M30.0593 26.6595L30.0593 26.655C30.0593 26.655 26.1606 22.7609 26.1582 22.759C25.8491 22.4498 25.3547 22.4565 25.0506 22.7611L23.256 24.563C22.5584 25.2608 21.6588 24.6416 19.932 23.2336C18.7895 22.302 17.475 21.0493 16.3353 19.637C15.5355 18.6461 14.8282 17.6055 15.5589 16.875C15.5608 16.8731 17.3608 15.0777 17.3605 15.0759L17.3618 15.0721C17.6849 14.7491 17.6536 14.2542 17.3586 13.9589L17.3586 13.9544C17.3586 13.9544 13.3472 9.94812 13.3449 9.94571C13.0358 9.63663 12.5417 9.64351 12.2374 9.94778L10.4296 11.7555C9.68479 12.6876 8.02956 17.1299 15.1257 24.4035C22.6012 32.0664 27.425 30.4272 28.2554 29.5626C28.2554 29.5626 30.0614 27.7781 30.0614 27.7763L30.0629 27.7727C30.3859 27.4495 30.3541 26.955 30.0593 26.6595V26.6595Z"
          fill="#171219"
        />
        <defs>
          <filter
            id="filter0_ii_145_419"
            x="-0.5"
            y="-0.5"
            width="41"
            height="41.4987"
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
              result="effect1_innerShadow_145_419"
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
              in2="effect1_innerShadow_145_419"
              result="effect2_innerShadow_145_419"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default PhoneIcon;
