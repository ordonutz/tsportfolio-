import React from "react";
interface linkedIconProps {
  onClick?: () => any;
  className?: string;
}
function GitIcon(props: linkedIconProps) {
  return (
    <div onClick={props.onClick} className={props.className}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_254_259)">
          <circle cx="10.093" cy="10.391" r="9.87215" fill="#F1F3F5" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.1718 4.29852C8.70678 4.29703 7.2891 4.81732 6.17282 5.76614C5.05654 6.71497 4.31464 8.03031 4.08007 9.47645C3.8455 10.9226 4.13359 12.405 4.89272 13.658C5.65185 14.911 6.83239 15.8528 8.22278 16.3145C8.53311 16.3712 8.64287 16.1782 8.64287 16.0155C8.64287 15.8527 8.64287 15.4819 8.64287 14.9672C6.9209 15.3418 6.55758 14.1383 6.55758 14.1383C6.44334 13.7653 6.20065 13.4449 5.87258 13.2338C5.31625 12.8554 5.91799 12.8554 5.91799 12.8554C6.11301 12.8829 6.2992 12.9545 6.46247 13.0646C6.62574 13.1748 6.7618 13.3207 6.86035 13.4912C6.94408 13.643 7.05698 13.7768 7.19255 13.8849C7.32813 13.993 7.48371 14.0733 7.65038 14.1211C7.81706 14.1689 7.99153 14.1834 8.16379 14.1636C8.33606 14.1438 8.50272 14.0902 8.65422 14.0059C8.67797 13.6945 8.81219 13.4019 9.03267 13.1808C7.66267 13.0257 6.22454 12.4958 6.22454 10.1532C6.21514 9.54124 6.44143 8.94909 6.85656 8.49937C6.67167 7.96727 6.69328 7.38515 6.91711 6.86823C6.91711 6.86823 7.4356 6.70171 8.61259 7.50025C9.62328 7.22275 10.6901 7.22275 11.7008 7.50025C12.8778 6.70171 13.3925 6.86823 13.3925 6.86823C13.6194 7.37968 13.6464 7.95762 13.4682 8.48801C13.8833 8.93774 14.1096 9.52989 14.1002 10.1419C14.1002 12.511 12.6583 13.0295 11.2845 13.1695C11.4318 13.3176 11.5455 13.4956 11.618 13.6915C11.6905 13.8874 11.72 14.0966 11.7046 14.3049C11.7046 15.1299 11.7046 15.796 11.7046 15.9965C11.7046 16.1971 11.8143 16.3523 12.1284 16.2917C13.503 15.8179 14.6659 14.8735 15.4116 13.6253C16.1573 12.3772 16.4379 10.9056 16.2038 9.47066C15.9697 8.03569 15.2359 6.72962 14.1322 5.78321C13.0284 4.83679 11.6257 4.31093 10.1718 4.29852V4.29852Z"
          fill="#9B6A6C"
        />
        <defs>
          <filter
            id="filter0_ii_254_259"
            x="-0.779114"
            y="-0.481112"
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
              result="effect1_innerShadow_254_259"
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
              in2="effect1_innerShadow_254_259"
              result="effect2_innerShadow_254_259"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default GitIcon;
