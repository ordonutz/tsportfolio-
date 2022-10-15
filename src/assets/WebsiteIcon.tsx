import React from "react";
interface WebsiteIconProps {
  className?: string;
}

const WebsiteIcon = (props: WebsiteIconProps) => {
  return (
    <div
      className={props.className}
      style={{
        width: "auto",
      }}
    >
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 594 670"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
    </div>
  );
};

export default WebsiteIcon;
