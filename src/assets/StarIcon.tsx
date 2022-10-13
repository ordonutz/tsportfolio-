import React from "react";

interface iconProps {
  className?: string;
}

export const StarIcon = (props: iconProps) => {
  return (
    <div className={props.className}>
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.1295 0.0225912C13.9674 0.167517 12.7752 1.09996 11.7361 2.67227C10.9103 3.92464 10.1282 5.60633 9.56495 7.3345C9.46104 7.65169 9.41456 7.72552 9.29698 7.7556C9.24229 7.76927 8.84032 7.78841 8.40281 7.79662C5.98556 7.84037 3.7816 8.256 2.35969 8.93688C0.2569 9.94042 -0.459524 11.51 0.286979 13.4733C0.688943 14.5316 1.42998 15.5652 2.67415 16.8093C3.43433 17.5723 4.12067 18.1602 5.17343 18.9559C5.44141 19.1582 5.60821 19.3032 5.61641 19.3414C5.62462 19.377 5.56993 19.6012 5.48242 19.8938C4.96561 21.5673 4.6785 22.9591 4.55818 24.3427C4.5199 24.8185 4.51717 25.833 4.55818 26.1885C4.63201 26.8311 4.79881 27.4682 5.02851 27.9577C5.70938 29.4343 7.17231 30.0359 9.12744 29.6448C10.0216 29.4671 10.8994 29.1554 11.9029 28.6659C12.808 28.2229 13.5135 27.8046 14.837 26.9213C15.1733 26.6971 15.4659 26.5057 15.485 26.5002C15.5042 26.492 15.66 26.5823 15.8323 26.7026C17.6179 27.9495 19.0754 28.7534 20.4781 29.2593C22.9719 30.1644 24.7821 29.8581 25.7474 28.3678C26.4419 27.2959 26.6388 25.5322 26.3134 23.3146C26.1521 22.2153 25.8786 21.0559 25.4876 19.8145C25.4056 19.5493 25.3673 19.3907 25.381 19.3442C25.3919 19.2977 25.4931 19.2075 25.69 19.0598C26.0974 18.7645 26.9806 18.0563 27.4072 17.6816C27.8502 17.2933 28.7799 16.3691 29.1053 15.989C30.4069 14.4769 31.0659 13.0577 30.9948 11.9174C30.9155 10.6514 30.1745 9.70253 28.6924 8.97243C28.2057 8.73453 27.7599 8.565 27.2213 8.41734C25.772 8.02084 24.3501 7.8349 22.4415 7.79115C21.7414 7.77474 21.6512 7.76654 21.602 7.72279C21.5719 7.69544 21.5035 7.54231 21.4461 7.38098C20.8828 5.77039 20.4781 4.8106 19.9394 3.81527C19.3406 2.70782 18.7964 1.94491 18.1538 1.30505C17.1558 0.312442 16.1686 -0.105928 15.1295 0.0225912Z"
          fill="url(#paint0_linear_252_222)"
        />
        <path
          d="M15.1407 18.7617C15.0634 18.7617 14.9945 18.7996 14.9424 18.859C14.8918 18.9183 14.8595 18.9991 14.8595 19.0915C14.8595 19.1822 14.8918 19.263 14.9424 19.324L15.4219 19.8864L15.9013 19.324C15.9519 19.2647 15.9842 19.1838 15.9842 19.0915C15.9842 19.0008 15.9519 18.92 15.9013 18.859C15.8507 18.7996 15.7818 18.7617 15.703 18.7617C15.6257 18.7617 15.5568 18.7996 15.5048 18.859C15.4542 18.9183 15.4219 18.9991 15.4219 19.0915C15.4219 19.0008 15.3895 18.92 15.3389 18.859C15.2883 18.7996 15.2194 18.7617 15.1407 18.7617V18.7617Z"
          fill="#3B3D42"
        />
        <path
          d="M20.4268 10.7948C20.1132 10.859 19.7575 11.0251 19.4214 11.2671C19.217 11.4128 18.9678 11.6752 18.9678 11.7451C18.9678 11.7626 19.105 11.681 19.2758 11.5644C20.1244 10.9668 20.6844 10.8619 21.421 11.1709C21.6842 11.2787 21.8494 11.3808 22.3983 11.7685C23.2048 12.3369 23.4569 12.4535 23.8769 12.4535C24.1514 12.4535 24.297 12.4098 24.507 12.2582C24.6555 12.1532 24.8319 11.9404 24.8039 11.8967C24.7955 11.8821 24.7255 11.8996 24.6443 11.9346C24.3642 12.0512 24.1962 12.0862 23.9245 12.0833C23.6697 12.0833 23.4653 12.0396 23.5605 12.0075C23.7733 11.9346 23.8713 11.8821 23.9693 11.7889C24.0842 11.6839 24.171 11.5498 24.129 11.5498C24.1178 11.5498 24.0058 11.6023 23.8825 11.6664C23.5185 11.8588 23.1852 11.8821 22.9668 11.7306C22.908 11.6927 22.8604 11.6489 22.8604 11.6373C22.8604 11.6256 22.9192 11.6052 22.9948 11.5936C23.1572 11.5673 23.2916 11.5119 23.4121 11.4157C23.5017 11.3458 23.6053 11.1796 23.5801 11.1534C23.5717 11.1446 23.4793 11.1825 23.3757 11.2379C23.104 11.3808 22.9864 11.4128 22.7624 11.4157C22.5747 11.4187 22.5579 11.4128 22.3563 11.2787C22.037 11.063 21.6674 10.8881 21.4041 10.8211C21.1493 10.7599 20.6648 10.7453 20.4268 10.7948Z"
          fill="#3B3D42"
        />
        <path
          d="M13.2006 14.6578C13.2006 16.8076 11.8935 18.5505 10.2811 18.5505C8.66869 18.5505 7.36157 16.8076 7.36157 14.6578C7.36157 12.5079 8.66869 10.765 10.2811 10.765C11.8935 10.765 13.2006 12.5079 13.2006 14.6578Z"
          fill="#3B3D42"
        />
        <path
          d="M23.8337 14.6578C23.8337 16.8076 22.5266 18.5505 20.9142 18.5505C19.3017 18.5505 17.9946 16.8076 17.9946 14.6578C17.9946 12.5079 19.3017 10.765 20.9142 10.765C22.5266 10.765 23.8337 12.5079 23.8337 14.6578Z"
          fill="#3B3D42"
        />
        <path
          d="M21.4011 13.4413C21.4011 14.3819 20.7475 15.1444 19.9413 15.1444C19.1351 15.1444 18.4816 14.3819 18.4816 13.4413C18.4816 12.5007 19.1351 11.7383 19.9413 11.7383C20.7475 11.7383 21.4011 12.5007 21.4011 13.4413Z"
          fill="#E6E4E4"
        />
        <path
          d="M23.3477 14.6577C23.3477 15.1952 23.0209 15.6309 22.6178 15.6309C22.2147 15.6309 21.8879 15.1952 21.8879 14.6577C21.8879 14.1202 22.2147 13.6845 22.6178 13.6845C23.0209 13.6845 23.3477 14.1202 23.3477 14.6577Z"
          fill="#E6E4E4"
        />
        <path
          d="M10.6366 13.4413C10.6366 14.3819 9.98301 15.1444 9.17681 15.1444C8.3706 15.1444 7.71704 14.3819 7.71704 13.4413C7.71704 12.5007 8.3706 11.7383 9.17681 11.7383C9.98301 11.7383 10.6366 12.5007 10.6366 13.4413Z"
          fill="#E6E4E4"
        />
        <path
          d="M12.5829 14.6578C12.5829 15.1953 12.2562 15.631 11.8531 15.631C11.4499 15.631 11.1232 15.1953 11.1232 14.6578C11.1232 14.1204 11.4499 13.6847 11.8531 13.6847C12.2562 13.6847 12.5829 14.1204 12.5829 14.6578Z"
          fill="#E6E4E4"
        />
        <path
          d="M9.71683 10.8853C9.46044 10.9336 9.02574 11.1011 8.75467 11.2562C8.62507 11.3299 8.5121 11.3728 8.43319 11.3778C8.25588 11.3861 7.93437 11.277 7.73852 11.1407C7.64301 11.0771 7.56068 11.0234 7.55511 11.0229C7.51336 11.0193 7.54395 11.1212 7.614 11.2206C7.7117 11.3574 7.91132 11.4824 8.09557 11.5243C8.16695 11.5421 8.22416 11.5615 8.22318 11.5731C8.21948 11.6166 7.97487 11.7243 7.85928 11.732C7.67592 11.7457 7.41948 11.6625 7.18819 11.5144C6.96197 11.3726 6.95133 11.3658 6.94763 11.4093C6.93901 11.5108 7.3 11.848 7.43359 11.8594C7.57275 11.8712 7.50684 11.9211 7.3288 11.9381C7.02633 11.9679 6.70563 11.8822 6.30393 11.6612C6.17248 11.5917 6.29521 11.8299 6.47877 12.0119C6.66536 12.1913 6.86515 12.2812 7.13511 12.3042C7.54979 12.3394 7.75806 12.2637 8.62759 11.7623C9.51758 11.2509 9.84185 11.1295 10.3217 11.1236C10.8013 11.1205 11.3073 11.3679 11.8931 11.8966C11.9869 11.9805 12.0685 12.0429 12.0748 12.0346C12.1051 12.008 11.9584 11.7882 11.8065 11.6293C11.5258 11.3368 11.1002 11.0671 10.7478 10.9583C10.4802 10.8742 9.97298 10.8399 9.71683 10.8853Z"
          fill="#3B3D42"
        />
        <defs>
          <linearGradient
            id="paint0_linear_252_222"
            x1="21.5155"
            y1="27.3623"
            x2="7.21565"
            y2="2.83456"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00140872" stop-color="#FAB005" />
            <stop offset="1" stop-color="#F2CB56" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
