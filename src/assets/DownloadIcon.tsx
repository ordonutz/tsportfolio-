import React from "react";

type Props = {};

const DownloadIcon = (props: Props) => {
  return (
    <div>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9286 8.57143C14.5203 8.57143 15 9.05113 15 9.64286V12.8571C15 14.0406 14.0406 15 12.8571 15H2.14286C0.959389 15 0 14.0406 0 12.8571V9.64286C0 9.05113 0.4797 8.57143 1.07143 8.57143C1.66316 8.57143 2.14286 9.05112 2.14286 9.64286V12.8571H12.8571V9.64286C12.8571 9.05112 13.3368 8.57143 13.9286 8.57143ZM7.5 0C8.09173 0 8.57143 0.4797 8.57143 1.07143V5.98477L9.95668 4.59952C10.3751 4.18111 11.0535 4.18111 11.4719 4.59952C11.8903 5.01795 11.8903 5.69634 11.4719 6.11476L7.5 10.0866L3.5281 6.11476C3.10968 5.69634 3.10968 5.01795 3.5281 4.59952C3.94652 4.18111 4.62491 4.18111 5.04333 4.59952L6.42857 5.98477V1.07143C6.42857 0.4797 6.90827 0 7.5 0V0Z"
          fill="#F1F3F5"
        />
      </svg>
    </div>
  );
};

export default DownloadIcon;
