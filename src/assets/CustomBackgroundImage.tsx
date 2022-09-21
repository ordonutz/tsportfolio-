import React from "react";

type Props = {};

const CustomBackgroundImage = (props: Props) => {
  return (
    <div>
      <svg
        width="481"
        height="1271"
        viewBox="0 0 481 1271"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g clip-path="url(#clip0_104_448)">
          <path d="M481 0H0V1271H481V0Z" fill="url(#pattern0)" />
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_104_448"
              transform="translate(0 -0.00747443) scale(0.002079 0.000786782)"
            />
          </pattern>
          <clipPath id="clip0_104_448">
            <rect width="481" height="1271" fill="white" />
          </clipPath>
          <image
            id="image0_104_448"
            width="481"
            height="1290"
          />
        </defs>
      </svg>
    </div>
  );
};

export default CustomBackgroundImage;