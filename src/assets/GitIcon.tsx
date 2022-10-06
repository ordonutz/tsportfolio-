import React from "react";
interface linkedIconProps {
  onClick?: () => any;
  className?: string;
}
function GitIcon(props: linkedIconProps) {
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
        <g filter="url(#filter0_ii_165_388)">
          <ellipse
            cx="18.5"
            cy="18.4988"
            rx="18.5"
            ry="18.4988"
            fill="#D9D9D9"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5634 5.28572C15.4113 5.28252 12.3612 6.40192 9.95949 8.44332C7.55781 10.4847 5.9616 13.3147 5.45692 16.4261C4.95224 19.5375 5.57207 22.7269 7.20534 25.4228C8.83861 28.1187 11.3786 30.1448 14.37 31.1381C15.0377 31.2603 15.2738 30.845 15.2738 30.4949C15.2738 30.1447 15.2738 29.3468 15.2738 28.2394C11.569 29.0455 10.7873 26.4562 10.7873 26.4562C10.5415 25.6537 10.0194 24.9642 9.31353 24.5101C8.11658 23.6959 9.41124 23.6959 9.41124 23.6959C9.83082 23.7552 10.2314 23.9091 10.5827 24.1461C10.9339 24.3831 11.2267 24.6969 11.4387 25.0638C11.6189 25.3905 11.8618 25.6784 12.1535 25.911C12.4452 26.1435 12.7799 26.3162 13.1385 26.4191C13.4971 26.522 13.8725 26.5531 14.2431 26.5105C14.6137 26.468 14.9723 26.3527 15.2983 26.1712C15.3494 25.5014 15.6381 24.8718 16.1125 24.3961C13.1649 24.0623 10.0708 22.9224 10.0708 17.8822C10.0505 16.5655 10.5374 15.2915 11.4306 14.3239C11.0328 13.1791 11.0793 11.9266 11.5609 10.8145C11.5609 10.8145 12.6764 10.4562 15.2087 12.1743C17.3832 11.5772 19.6784 11.5772 21.853 12.1743C24.3853 10.4562 25.4927 10.8145 25.4927 10.8145C25.9809 11.9149 26.0391 13.1583 25.6555 14.2995C26.5487 15.2671 27.0355 16.5411 27.0153 17.8577C27.0153 22.9549 23.913 24.0704 20.9573 24.3717C21.2742 24.6903 21.519 25.0733 21.6749 25.4948C21.8308 25.9162 21.8943 26.3663 21.8611 26.8145C21.8611 28.5895 21.8611 30.0226 21.8611 30.4542C21.8611 30.8857 22.0972 31.2196 22.7731 31.0893C25.7305 30.0698 28.2324 28.0378 29.8368 25.3524C31.4412 22.6671 32.0449 19.501 31.5412 16.4136C31.0376 13.3263 29.4589 10.5163 27.0842 8.48004C24.7094 6.44382 21.6915 5.31242 18.5634 5.28572V5.28572Z"
          fill="#191717"
        />
        <defs>
          <filter
            id="filter0_ii_165_388"
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
              result="effect1_innerShadow_165_388"
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
              in2="effect1_innerShadow_165_388"
              result="effect2_innerShadow_165_388"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default GitIcon;
