import React from "react";

type Props = {};

const PreviewIcon = (props: Props) => {
  return (
    <div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM16 16H2V4H16V16ZM9 7.5C10.84 7.5 12.48 8.46 13.34 10C12.48 11.54 10.84 12.5 9 12.5C7.16 12.5 5.52 11.54 4.66 10C5.52 8.46 7.16 7.5 9 7.5ZM9 6C6.27 6 3.94 7.66 3 10C3.94 12.34 6.27 14 9 14C11.73 14 14.06 12.34 15 10C14.06 7.66 11.73 6 9 6ZM9 11.5C8.17 11.5 7.5 10.83 7.5 10C7.5 9.17 8.17 8.5 9 8.5C9.83 8.5 10.5 9.17 10.5 10C10.5 10.83 9.83 11.5 9 11.5Z"
          fill="#171219"
        />
      </svg>
    </div>
  );
};

export default PreviewIcon;
