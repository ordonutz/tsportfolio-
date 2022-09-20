import React from "react";

/*
TO DO: 
  - interface for props
  - outline what props should be
  - styles
*/

function MainLogo() {
  return (
    <svg
      width="155"
      height="53"
      viewBox="0 0 155 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M69.4707 30.2661C69.3454 30.5282 69.1859 30.8415 68.9922 31.2061C68.8099 31.5592 68.5991 31.9295 68.3599 32.3169C68.1206 32.7043 67.8529 33.0916 67.5566 33.479C67.2604 33.855 66.9357 34.1968 66.5825 34.5044C66.2407 34.8006 65.8704 35.0399 65.4717 35.2222C65.0843 35.4159 64.6685 35.5127 64.2241 35.5127C63.5405 35.5127 62.9538 35.3019 62.4639 34.8804C61.974 34.4588 61.5581 33.9062 61.2163 33.2227C60.8745 32.5391 60.5954 31.7643 60.3789 30.8984C60.1738 30.0212 60.0143 29.1325 59.9004 28.2324C59.7865 27.321 59.7067 26.438 59.6611 25.5835C59.627 24.729 59.6099 23.9714 59.6099 23.3105C59.6099 22.3535 59.6383 21.3623 59.6953 20.3369C59.7637 19.3115 59.8662 18.3089 60.0029 17.3291C60.1396 16.3493 60.3105 15.4207 60.5156 14.5435C60.7321 13.6662 60.9827 12.8971 61.2676 12.2363C61.5638 11.5755 61.8999 11.0514 62.2759 10.6641C62.6519 10.2767 63.0791 10.083 63.5576 10.083C63.9336 10.083 64.2697 10.1742 64.5659 10.3564C64.8735 10.5273 65.1299 10.8122 65.335 11.2109C65.54 11.6097 65.6995 12.1281 65.8135 12.7661C65.9274 13.4041 65.9844 14.1846 65.9844 15.1074C65.9844 16.2467 65.8647 17.4259 65.6255 18.645C65.3862 19.8527 65.0615 21.0718 64.6514 22.3022C64.2412 23.5327 63.757 24.7632 63.1987 25.9937C62.6405 27.2127 62.0423 28.4033 61.4043 29.5654C61.6891 31.0124 62.0708 32.1517 62.5493 32.9834C63.0278 33.8037 63.6032 34.2139 64.2754 34.2139C64.7311 34.2139 65.1698 34.0373 65.5913 33.6841C66.0129 33.3195 66.4002 32.8923 66.7534 32.4023C67.1066 31.9124 67.4142 31.4168 67.6763 30.9155C67.9497 30.4028 68.1605 29.9927 68.3086 29.6851C68.3656 29.5711 68.4453 29.4857 68.5479 29.4287C68.6504 29.3604 68.7643 29.3262 68.8896 29.3262C69.0833 29.3262 69.2371 29.3945 69.3511 29.5312C69.4764 29.668 69.5391 29.8218 69.5391 29.9927C69.5391 30.061 69.5163 30.1522 69.4707 30.2661ZM60.9087 23.396C60.9087 24.1252 60.9258 24.8258 60.96 25.498C60.9941 26.1702 61.0397 26.814 61.0967 27.4292C61.5752 26.5063 62.0309 25.5265 62.4639 24.4897C62.8968 23.4416 63.2785 22.3877 63.6089 21.3281C63.9393 20.2572 64.2013 19.1976 64.395 18.1494C64.6001 17.0898 64.7026 16.0815 64.7026 15.1245C64.7026 13.7801 64.5944 12.8174 64.3779 12.2363C64.1615 11.6553 63.8709 11.3647 63.5063 11.3647C63.2671 11.3647 63.0335 11.5299 62.8057 11.8604C62.5892 12.1908 62.3841 12.6408 62.1904 13.2104C61.9967 13.7801 61.8201 14.4523 61.6606 15.2271C61.5011 16.0018 61.3644 16.8335 61.2505 17.7222C61.1479 18.6108 61.0625 19.5394 60.9941 20.5078C60.9372 21.4762 60.9087 22.439 60.9087 23.396ZM70.3765 33.1201C70.6157 33.4505 70.9233 33.7183 71.2993 33.9233C71.6753 34.117 72.1367 34.2139 72.6836 34.2139C73.2419 34.2139 73.7489 34.0828 74.2046 33.8208C74.6603 33.5474 75.0762 33.1942 75.4521 32.7612C75.8281 32.3283 76.1642 31.8441 76.4604 31.3086C76.7567 30.7731 77.0244 30.2376 77.2637 29.7021C77.3206 29.5768 77.4004 29.4857 77.5029 29.4287C77.6055 29.3604 77.7194 29.3262 77.8447 29.3262C78.0384 29.3262 78.1922 29.3945 78.3062 29.5312C78.4315 29.668 78.4941 29.8161 78.4941 29.9756C78.4941 30.0326 78.4884 30.0838 78.4771 30.1294C78.4657 30.1636 78.4486 30.2035 78.4258 30.249C77.6396 31.9808 76.7795 33.2853 75.8452 34.1626C74.9224 35.0399 73.8742 35.4899 72.7007 35.5127C71.9487 35.5127 71.2993 35.3646 70.7524 35.0684C70.2056 34.7835 69.7555 34.4132 69.4023 33.9575C69.0492 33.4904 68.7871 32.9663 68.6162 32.3853C68.4453 31.8042 68.3599 31.2231 68.3599 30.6421C68.3599 30.061 68.4282 29.5256 68.5649 29.0356C68.7131 28.5457 68.9181 28.1185 69.1802 27.7539C69.4536 27.3893 69.7726 27.1045 70.1372 26.8994C70.5132 26.6943 70.9233 26.5918 71.3677 26.5918C71.6297 26.5918 71.8861 26.6488 72.1367 26.7627C72.3988 26.8652 72.6323 27.019 72.8374 27.2241C73.0425 27.4178 73.2077 27.6571 73.333 27.9419C73.4583 28.2267 73.521 28.5514 73.521 28.916C73.521 29.3831 73.4412 29.8218 73.2817 30.2319C73.1222 30.6421 72.9001 31.0238 72.6152 31.377C72.3418 31.7301 72.0114 32.0549 71.624 32.3511C71.2367 32.6473 70.8208 32.9036 70.3765 33.1201ZM69.8638 32.0093C70.217 31.8612 70.536 31.6732 70.8208 31.4453C71.117 31.2174 71.3677 30.9668 71.5728 30.6934C71.7778 30.4199 71.9373 30.1351 72.0513 29.8389C72.1652 29.5312 72.2222 29.2236 72.2222 28.916C72.2222 28.5742 72.1367 28.3179 71.9658 28.147C71.7949 27.9647 71.5955 27.8735 71.3677 27.8735C71.0601 27.8735 70.798 27.959 70.5815 28.1299C70.3651 28.3008 70.1885 28.5229 70.0518 28.7964C69.915 29.0698 69.8125 29.3774 69.7441 29.7192C69.6872 30.0496 69.6587 30.38 69.6587 30.7104C69.6587 30.9155 69.6758 31.132 69.71 31.3599C69.7555 31.5877 69.8068 31.8042 69.8638 32.0093ZM79.1777 28.6768C79.1094 28.859 79.0239 29.0641 78.9214 29.292C78.8302 29.5199 78.722 29.7591 78.5967 30.0098C78.4941 30.2035 78.3859 30.3573 78.272 30.4712C78.1694 30.5737 78.0327 30.625 77.8618 30.625C77.6681 30.625 77.5143 30.568 77.4004 30.4541C77.2865 30.3288 77.2295 30.1864 77.2295 30.0269C77.2295 29.9699 77.2352 29.9243 77.2466 29.8901C77.258 29.8446 77.2865 29.7762 77.332 29.6851C77.6283 29.1154 77.8447 28.6198 77.9814 28.1982C78.1296 27.7653 78.2492 27.3153 78.3403 26.8481C78.2606 26.5861 78.2036 26.3639 78.1694 26.1816C78.1353 25.9993 78.1182 25.8114 78.1182 25.6177C78.1182 25.2417 78.1979 24.9398 78.3574 24.7119C78.5169 24.4727 78.7391 24.353 79.0239 24.353C79.286 24.353 79.491 24.467 79.6392 24.6948C79.7987 24.9227 79.8784 25.2018 79.8784 25.5322C79.8784 25.7145 79.8613 25.8968 79.8271 26.0791C79.793 26.2614 79.7474 26.4893 79.6904 26.7627C79.9525 27.4121 80.2145 27.9875 80.4766 28.4888C80.7386 28.9901 80.9722 29.4515 81.1772 29.873C81.3823 30.2832 81.5475 30.6706 81.6729 31.0352C81.8096 31.3997 81.8779 31.7643 81.8779 32.1289C81.8779 32.6074 81.7811 33.0632 81.5874 33.4961C81.3937 33.929 81.0747 34.2936 80.6304 34.5898C80.6873 34.6012 80.7443 34.6069 80.8013 34.6069C80.8582 34.6069 80.9152 34.6069 80.9722 34.6069C81.6216 34.6069 82.2197 34.4588 82.7666 34.1626C83.3135 33.8664 83.8034 33.4847 84.2363 33.0176C84.6807 32.5391 85.0737 32.015 85.4155 31.4453C85.7573 30.8643 86.0535 30.2889 86.3042 29.7192C86.4181 29.4572 86.5776 29.3262 86.7827 29.3262C86.9764 29.3262 87.1245 29.3945 87.2271 29.5312C87.341 29.668 87.3979 29.8161 87.3979 29.9756C87.3979 30.0667 87.3809 30.1522 87.3467 30.2319C87.2214 30.5396 87.0562 30.8927 86.8511 31.2915C86.6574 31.6789 86.4181 32.0833 86.1333 32.5049C85.8599 32.915 85.5409 33.3195 85.1763 33.7183C84.8117 34.117 84.4015 34.4759 83.9458 34.7949C83.5015 35.1025 83.0116 35.3475 82.4761 35.5298C81.9406 35.7235 81.3538 35.8203 80.7158 35.8203C79.9525 35.8203 79.2404 35.6836 78.5796 35.4102C77.9302 35.1481 77.4004 34.7095 76.9902 34.0942C76.9219 33.9917 76.8877 33.8835 76.8877 33.7695C76.8877 33.5986 76.9504 33.4505 77.0757 33.3252C77.2124 33.1885 77.3662 33.1201 77.5371 33.1201C77.7194 33.1201 77.8732 33.1828 77.9985 33.3081C78.0099 33.3309 78.0498 33.3708 78.1182 33.4277C78.1865 33.4733 78.2663 33.5303 78.3574 33.5986C78.46 33.6556 78.5739 33.7069 78.6992 33.7524C78.8359 33.798 78.9727 33.8208 79.1094 33.8208C79.3828 33.8208 79.6107 33.7638 79.793 33.6499C79.9867 33.536 80.1405 33.3993 80.2544 33.2397C80.3683 33.0688 80.4481 32.8923 80.4937 32.71C80.5506 32.5163 80.5791 32.3511 80.5791 32.2144C80.5791 31.9295 80.5335 31.6447 80.4424 31.3599C80.3512 31.075 80.2316 30.7902 80.0835 30.5054C79.9468 30.2205 79.793 29.93 79.6221 29.6338C79.4626 29.3262 79.3145 29.0072 79.1777 28.6768ZM95.8916 30.2661C95.7663 30.5282 95.6068 30.8415 95.4131 31.2061C95.2308 31.5592 95.02 31.9295 94.7808 32.3169C94.5415 32.7043 94.2738 33.0916 93.9775 33.479C93.6813 33.855 93.3566 34.1968 93.0034 34.5044C92.6616 34.8006 92.2913 35.0399 91.8926 35.2222C91.5052 35.4159 91.0894 35.5127 90.645 35.5127C89.9614 35.5127 89.3747 35.3019 88.8848 34.8804C88.3949 34.4588 87.979 33.9062 87.6372 33.2227C87.2954 32.5391 87.0163 31.7643 86.7998 30.8984C86.5947 30.0212 86.4352 29.1325 86.3213 28.2324C86.2074 27.321 86.1276 26.438 86.082 25.5835C86.0479 24.729 86.0308 23.9714 86.0308 23.3105C86.0308 22.3535 86.0592 21.3623 86.1162 20.3369C86.1846 19.3115 86.2871 18.3089 86.4238 17.3291C86.5605 16.3493 86.7314 15.4207 86.9365 14.5435C87.153 13.6662 87.4036 12.8971 87.6885 12.2363C87.9847 11.5755 88.3208 11.0514 88.6968 10.6641C89.0728 10.2767 89.5 10.083 89.9785 10.083C90.3545 10.083 90.6906 10.1742 90.9868 10.3564C91.2944 10.5273 91.5508 10.8122 91.7559 11.2109C91.9609 11.6097 92.1204 12.1281 92.2344 12.7661C92.3483 13.4041 92.4053 14.1846 92.4053 15.1074C92.4053 16.2467 92.2856 17.4259 92.0464 18.645C91.8071 19.8527 91.4824 21.0718 91.0723 22.3022C90.6621 23.5327 90.1779 24.7632 89.6196 25.9937C89.0614 27.2127 88.4632 28.4033 87.8252 29.5654C88.11 31.0124 88.4917 32.1517 88.9702 32.9834C89.4487 33.8037 90.0241 34.2139 90.6963 34.2139C91.152 34.2139 91.5907 34.0373 92.0122 33.6841C92.4338 33.3195 92.8211 32.8923 93.1743 32.4023C93.5275 31.9124 93.8351 31.4168 94.0972 30.9155C94.3706 30.4028 94.5814 29.9927 94.7295 29.6851C94.7865 29.5711 94.8662 29.4857 94.9688 29.4287C95.0713 29.3604 95.1852 29.3262 95.3105 29.3262C95.5042 29.3262 95.658 29.3945 95.772 29.5312C95.8973 29.668 95.96 29.8218 95.96 29.9927C95.96 30.061 95.9372 30.1522 95.8916 30.2661ZM87.3296 23.396C87.3296 24.1252 87.3467 24.8258 87.3809 25.498C87.415 26.1702 87.4606 26.814 87.5176 27.4292C87.9961 26.5063 88.4518 25.5265 88.8848 24.4897C89.3177 23.4416 89.6994 22.3877 90.0298 21.3281C90.3602 20.2572 90.6222 19.1976 90.8159 18.1494C91.021 17.0898 91.1235 16.0815 91.1235 15.1245C91.1235 13.7801 91.0153 12.8174 90.7988 12.2363C90.5824 11.6553 90.2918 11.3647 89.9272 11.3647C89.688 11.3647 89.4544 11.5299 89.2266 11.8604C89.0101 12.1908 88.805 12.6408 88.6113 13.2104C88.4176 13.7801 88.241 14.4523 88.0815 15.2271C87.922 16.0018 87.7853 16.8335 87.6714 17.7222C87.5688 18.6108 87.4834 19.5394 87.415 20.5078C87.3581 21.4762 87.3296 22.439 87.3296 23.396ZM97.5322 21.5845C97.5322 22.0174 97.3784 22.3877 97.0708 22.6953C96.7746 22.9915 96.41 23.1396 95.9771 23.1396C95.5441 23.1396 95.1738 22.9915 94.8662 22.6953C94.57 22.3877 94.4219 22.0174 94.4219 21.5845C94.4219 21.368 94.4618 21.1686 94.5415 20.9863C94.6213 20.7926 94.7295 20.6274 94.8662 20.4907C95.0143 20.3426 95.1795 20.2287 95.3618 20.1489C95.5555 20.0692 95.7606 20.0293 95.9771 20.0293C96.1935 20.0293 96.3929 20.0692 96.5752 20.1489C96.7689 20.2287 96.9341 20.3426 97.0708 20.4907C97.2189 20.6274 97.3328 20.7926 97.4126 20.9863C97.4924 21.1686 97.5322 21.368 97.5322 21.5845ZM94.7637 31.5991C94.7637 29.9585 94.8662 28.3236 95.0713 26.6943C95.0941 26.5348 95.1624 26.3981 95.2764 26.2842C95.4017 26.1589 95.5612 26.0962 95.7549 26.0962C95.9258 26.0962 96.0682 26.1646 96.1821 26.3013C96.2961 26.4266 96.353 26.5747 96.353 26.7456C96.353 26.814 96.3359 27.019 96.3018 27.3608C96.279 27.7026 96.2448 28.1128 96.1992 28.5913C96.165 29.0584 96.1309 29.5597 96.0967 30.0952C96.0739 30.6193 96.0625 31.1035 96.0625 31.5479C96.0625 32.1517 96.1195 32.6416 96.2334 33.0176C96.3587 33.3822 96.5125 33.667 96.6948 33.8721C96.8885 34.0771 97.0879 34.2139 97.293 34.2822C97.5094 34.3506 97.7145 34.3848 97.9082 34.3848C98.2272 34.3848 98.5576 34.2708 98.8994 34.043C99.2412 33.8151 99.5887 33.4961 99.9419 33.0859C100.306 32.6758 100.671 32.1859 101.036 31.6162C101.4 31.0352 101.759 30.3914 102.112 29.6851C102.169 29.5711 102.249 29.4857 102.352 29.4287C102.454 29.3604 102.568 29.3262 102.693 29.3262C102.876 29.3262 103.024 29.3945 103.138 29.5312C103.263 29.668 103.326 29.8161 103.326 29.9756C103.326 30.0895 103.303 30.1864 103.257 30.2661C103.121 30.5282 102.95 30.8472 102.745 31.2231C102.54 31.5991 102.306 31.9865 102.044 32.3853C101.782 32.784 101.491 33.1828 101.172 33.5815C100.865 33.9689 100.534 34.3221 100.181 34.6411C99.828 34.9487 99.4577 35.1994 99.0703 35.3931C98.6829 35.5868 98.2899 35.6836 97.8911 35.6836C97.3784 35.6836 96.9284 35.5754 96.541 35.3589C96.1536 35.1424 95.8232 34.8519 95.5498 34.4873C95.2878 34.1227 95.0884 33.6955 94.9517 33.2056C94.8263 32.7043 94.7637 32.1688 94.7637 31.5991ZM96.5752 21.5845C96.5752 21.425 96.5125 21.2882 96.3872 21.1743C96.2733 21.049 96.1366 20.9863 95.9771 20.9863C95.8175 20.9863 95.6808 21.049 95.5669 21.1743C95.453 21.2882 95.396 21.425 95.396 21.5845C95.396 21.744 95.453 21.8807 95.5669 21.9946C95.6808 22.1086 95.8175 22.1655 95.9771 22.1655C96.1366 22.1655 96.2733 22.1086 96.3872 21.9946C96.5125 21.8807 96.5752 21.744 96.5752 21.5845ZM104.146 33.1201C104.385 33.4505 104.693 33.7183 105.069 33.9233C105.445 34.117 105.906 34.2139 106.453 34.2139C107.011 34.2139 107.518 34.0828 107.974 33.8208C108.43 33.5474 108.846 33.1942 109.222 32.7612C109.598 32.3283 109.934 31.8441 110.23 31.3086C110.526 30.7731 110.794 30.2376 111.033 29.7021C111.09 29.5768 111.17 29.4857 111.272 29.4287C111.375 29.3604 111.489 29.3262 111.614 29.3262C111.808 29.3262 111.962 29.3945 112.076 29.5312C112.201 29.668 112.264 29.8161 112.264 29.9756C112.264 30.0326 112.258 30.0838 112.247 30.1294C112.235 30.1636 112.218 30.2035 112.195 30.249C111.409 31.9808 110.549 33.2853 109.615 34.1626C108.692 35.0399 107.644 35.4899 106.47 35.5127C105.718 35.5127 105.069 35.3646 104.522 35.0684C103.975 34.7835 103.525 34.4132 103.172 33.9575C102.819 33.4904 102.557 32.9663 102.386 32.3853C102.215 31.8042 102.129 31.2231 102.129 30.6421C102.129 30.061 102.198 29.5256 102.334 29.0356C102.483 28.5457 102.688 28.1185 102.95 27.7539C103.223 27.3893 103.542 27.1045 103.907 26.8994C104.283 26.6943 104.693 26.5918 105.137 26.5918C105.399 26.5918 105.656 26.6488 105.906 26.7627C106.168 26.8652 106.402 27.019 106.607 27.2241C106.812 27.4178 106.977 27.6571 107.103 27.9419C107.228 28.2267 107.291 28.5514 107.291 28.916C107.291 29.3831 107.211 29.8218 107.051 30.2319C106.892 30.6421 106.67 31.0238 106.385 31.377C106.111 31.7301 105.781 32.0549 105.394 32.3511C105.006 32.6473 104.59 32.9036 104.146 33.1201ZM103.633 32.0093C103.986 31.8612 104.306 31.6732 104.59 31.4453C104.887 31.2174 105.137 30.9668 105.342 30.6934C105.547 30.4199 105.707 30.1351 105.821 29.8389C105.935 29.5312 105.992 29.2236 105.992 28.916C105.992 28.5742 105.906 28.3179 105.735 28.147C105.564 27.9647 105.365 27.8735 105.137 27.8735C104.83 27.8735 104.568 27.959 104.351 28.1299C104.135 28.3008 103.958 28.5229 103.821 28.7964C103.685 29.0698 103.582 29.3774 103.514 29.7192C103.457 30.0496 103.428 30.38 103.428 30.7104C103.428 30.9155 103.445 31.132 103.479 31.3599C103.525 31.5877 103.576 31.8042 103.633 32.0093ZM126.619 33.1201C126.334 33.1201 126.084 33.0973 125.867 33.0518C125.696 33.3936 125.491 33.7126 125.252 34.0088C125.013 34.2936 124.734 34.5443 124.415 34.7607C124.107 34.9772 123.759 35.1481 123.372 35.2734C122.985 35.3988 122.563 35.4614 122.107 35.4614C121.572 35.4614 121.082 35.3646 120.638 35.1709C120.193 34.9886 119.806 34.7323 119.476 34.4019C119.145 34.0601 118.889 33.6556 118.707 33.1885C118.524 32.71 118.433 32.1859 118.433 31.6162C118.433 30.887 118.564 30.2547 118.826 29.7192C119.088 29.1724 119.39 28.7223 119.732 28.3691C120.074 28.0046 120.416 27.7368 120.757 27.5659C121.099 27.3836 121.355 27.2925 121.526 27.2925C121.72 27.2925 121.862 27.3438 121.954 27.4463C122.056 27.5488 122.107 27.6855 122.107 27.8564C122.107 28.0501 122.045 28.1982 121.919 28.3008C121.806 28.3919 121.657 28.4831 121.475 28.5742C121.293 28.6654 121.099 28.7964 120.894 28.9673C120.689 29.1268 120.495 29.3319 120.313 29.5825C120.142 29.8332 120 30.1294 119.886 30.4712C119.772 30.813 119.715 31.1947 119.715 31.6162C119.715 31.9922 119.772 32.3454 119.886 32.6758C120 32.9948 120.165 33.2739 120.381 33.5132C120.598 33.741 120.854 33.9233 121.15 34.0601C121.447 34.1854 121.777 34.248 122.142 34.248C122.791 34.248 123.326 34.0999 123.748 33.8037C124.181 33.4961 124.511 33.1087 124.739 32.6416C124.067 32.2884 123.514 31.7871 123.082 31.1377C122.649 30.4883 122.432 29.7591 122.432 28.9502C122.432 28.3008 122.586 27.771 122.894 27.3608C123.213 26.9507 123.628 26.7456 124.141 26.7456C124.449 26.7456 124.739 26.8197 125.013 26.9678C125.286 27.1159 125.525 27.3494 125.73 27.6685C125.947 27.9875 126.118 28.3976 126.243 28.8989C126.368 29.4002 126.431 29.9984 126.431 30.6934C126.431 31.0579 126.386 31.4396 126.294 31.8384C126.363 31.8498 126.431 31.8555 126.5 31.8555C126.568 31.8555 126.642 31.8555 126.722 31.8555C127.109 31.8555 127.457 31.8099 127.764 31.7188C128.072 31.6276 128.351 31.4909 128.602 31.3086C128.852 31.1263 129.074 30.8927 129.268 30.6079C129.473 30.3231 129.667 29.9927 129.849 29.6167C129.883 29.5483 129.957 29.4857 130.071 29.4287C130.185 29.3604 130.299 29.3262 130.413 29.3262C130.561 29.3262 130.698 29.3888 130.823 29.5142C130.96 29.6281 131.028 29.7819 131.028 29.9756C131.028 30.0667 131.006 30.1693 130.96 30.2832C130.914 30.3857 130.869 30.4826 130.823 30.5737C130.63 30.9155 130.402 31.2459 130.14 31.5649C129.889 31.8726 129.587 32.146 129.234 32.3853C128.892 32.6131 128.505 32.7954 128.072 32.9321C127.639 33.0688 127.155 33.1315 126.619 33.1201ZM123.697 28.8135C123.697 29.0299 123.725 29.2578 123.782 29.4971C123.839 29.7363 123.925 29.9756 124.039 30.2148C124.164 30.4427 124.312 30.6649 124.483 30.8813C124.665 31.0864 124.876 31.263 125.115 31.4111C125.149 31.1719 125.167 30.9383 125.167 30.7104C125.167 30.4028 125.144 30.0895 125.098 29.7705C125.053 29.4515 124.984 29.161 124.893 28.8989C124.813 28.6255 124.711 28.409 124.585 28.2495C124.46 28.0786 124.312 27.9932 124.141 27.9932C124.073 27.9932 123.982 28.0444 123.868 28.147C123.754 28.2495 123.697 28.4717 123.697 28.8135ZM133.233 34.5044C133.233 34.7664 133.142 34.9829 132.959 35.1538C132.789 35.3361 132.572 35.4272 132.31 35.4272C132.048 35.4272 131.826 35.3361 131.644 35.1538C131.473 34.9829 131.387 34.7664 131.387 34.5044C131.387 34.2537 131.473 34.043 131.644 33.8721C131.826 33.6898 132.048 33.5986 132.31 33.5986C132.572 33.5986 132.789 33.6898 132.959 33.8721C133.142 34.043 133.233 34.2537 133.233 34.5044ZM137.454 33.5474C137.636 33.16 137.847 32.7441 138.086 32.2998C138.326 31.8441 138.582 31.3826 138.855 30.9155C139.129 30.437 139.419 29.9642 139.727 29.4971C140.035 29.0299 140.354 28.5913 140.684 28.1812C141.014 27.7824 141.345 27.4976 141.675 27.3267C142.017 27.1444 142.336 27.0532 142.632 27.0532C142.929 27.0532 143.185 27.1159 143.401 27.2412C143.629 27.3551 143.812 27.5146 143.948 27.7197C144.096 27.9248 144.205 28.1641 144.273 28.4375C144.353 28.7109 144.393 29.0072 144.393 29.3262C144.393 29.5882 144.364 29.9414 144.307 30.3857C144.262 30.8187 144.239 31.2744 144.239 31.7529C144.239 32.0264 144.25 32.2998 144.273 32.5732C144.307 32.8353 144.358 33.0745 144.427 33.291C144.507 33.4961 144.62 33.667 144.769 33.8037C144.917 33.929 145.11 33.9917 145.35 33.9917C145.623 33.9917 145.896 33.9176 146.17 33.7695C146.443 33.61 146.711 33.4049 146.973 33.1543C147.235 32.8923 147.486 32.6074 147.725 32.2998C147.964 31.9808 148.181 31.6675 148.375 31.3599C148.568 31.0409 148.739 30.7389 148.887 30.4541C149.035 30.1579 149.155 29.9129 149.246 29.7192C149.36 29.4572 149.559 29.3262 149.844 29.3262C150.038 29.3262 150.192 29.3945 150.306 29.5312C150.42 29.668 150.477 29.8161 150.477 29.9756C150.477 30.0667 150.459 30.1522 150.425 30.2319C150.38 30.3231 150.289 30.5111 150.152 30.7959C150.027 31.0807 149.85 31.4111 149.622 31.7871C149.406 32.1631 149.149 32.5562 148.853 32.9663C148.557 33.3765 148.226 33.7581 147.862 34.1113C147.509 34.4531 147.121 34.738 146.7 34.9658C146.29 35.1823 145.857 35.2905 145.401 35.2905C144.877 35.2905 144.455 35.1823 144.136 34.9658C143.817 34.738 143.567 34.4531 143.384 34.1113C143.213 33.7695 143.094 33.3879 143.025 32.9663C142.968 32.5448 142.94 32.1346 142.94 31.7358C142.94 31.5308 142.946 31.3143 142.957 31.0864C142.98 30.8472 143.003 30.6136 143.025 30.3857C143.048 30.1579 143.065 29.9471 143.077 29.7534C143.099 29.5483 143.111 29.3774 143.111 29.2407C143.111 28.8875 143.06 28.6483 142.957 28.5229C142.866 28.3976 142.758 28.335 142.632 28.335C142.45 28.335 142.239 28.4432 142 28.6597C141.772 28.8647 141.527 29.1382 141.265 29.48C141.014 29.8218 140.758 30.2091 140.496 30.6421C140.245 31.0636 140 31.4852 139.761 31.9067C139.522 32.3283 139.306 32.7327 139.112 33.1201C138.918 33.4961 138.759 33.8094 138.633 34.0601C138.394 34.5386 138.149 34.8576 137.898 35.0171C137.659 35.188 137.443 35.2734 137.249 35.2734C136.896 35.2734 136.622 35.1367 136.429 34.8633C136.246 34.5785 136.155 34.2367 136.155 33.8379V32.7612C136.155 30.6079 136.155 28.5571 136.155 26.6089C136.167 24.6493 136.195 22.832 136.241 21.1572C136.298 19.471 136.383 17.95 136.497 16.5942C136.622 15.2271 136.805 14.0649 137.044 13.1079C137.283 12.1395 137.585 11.3932 137.95 10.8691C138.326 10.3451 138.793 10.083 139.351 10.083C139.83 10.083 140.234 10.214 140.564 10.4761C140.895 10.7381 141.163 11.097 141.368 11.5527C141.573 11.9971 141.721 12.5212 141.812 13.125C141.903 13.7174 141.949 14.3441 141.949 15.0049C141.949 16.3493 141.823 17.6709 141.573 18.9697C141.333 20.2572 141.009 21.5161 140.599 22.7466C140.188 23.9771 139.71 25.179 139.163 26.3525C138.616 27.5146 138.041 28.6483 137.437 29.7534C137.437 29.9585 137.437 30.2035 137.437 30.4883C137.437 30.7731 137.437 31.0579 137.437 31.3428C137.437 31.6276 137.437 31.8953 137.437 32.146C137.437 32.3966 137.437 32.596 137.437 32.7441L137.454 33.5474ZM137.454 27.2412C137.933 26.193 138.366 25.1733 138.753 24.1821C139.152 23.1795 139.488 22.1826 139.761 21.1914C140.046 20.2002 140.268 19.1976 140.428 18.1836C140.587 17.1582 140.667 16.0929 140.667 14.9878C140.667 14.8055 140.656 14.515 140.633 14.1162C140.621 13.7174 140.57 13.313 140.479 12.9028C140.399 12.4927 140.268 12.1338 140.086 11.8262C139.915 11.5186 139.67 11.3647 139.351 11.3647C139.1 11.3647 138.884 11.5356 138.702 11.8774C138.519 12.2078 138.36 12.6636 138.223 13.2446C138.086 13.8143 137.972 14.4808 137.881 15.2441C137.79 16.0075 137.716 16.8164 137.659 17.6709C137.602 18.5254 137.557 19.4027 137.522 20.3027C137.5 21.2028 137.483 22.0801 137.471 22.9346C137.46 23.7777 137.454 24.5695 137.454 25.3101C137.454 26.0506 137.454 26.6943 137.454 27.2412ZM152.681 34.5044C152.681 34.7664 152.59 34.9829 152.408 35.1538C152.237 35.3361 152.02 35.4272 151.758 35.4272C151.496 35.4272 151.274 35.3361 151.092 35.1538C150.921 34.9829 150.835 34.7664 150.835 34.5044C150.835 34.2537 150.921 34.043 151.092 33.8721C151.274 33.6898 151.496 33.5986 151.758 33.5986C152.02 33.5986 152.237 33.6898 152.408 33.8721C152.59 34.043 152.681 34.2537 152.681 34.5044Z"
        fill="#FAA2C1"
      />
      <path
        d="M19.9644 35.583C19.5981 35.583 19.2759 35.5537 18.9976 35.4951C18.7778 35.9346 18.5142 36.3447 18.2065 36.7256C17.8989 37.0918 17.54 37.4141 17.1299 37.6924C16.7344 37.9707 16.2876 38.1904 15.7896 38.3516C15.2915 38.5127 14.7495 38.5933 14.1636 38.5933C13.4751 38.5933 12.8452 38.4688 12.2739 38.2197C11.7026 37.9854 11.2046 37.6558 10.7798 37.231C10.355 36.7915 10.0254 36.2715 9.79102 35.6709C9.55664 35.0557 9.43945 34.3818 9.43945 33.6494C9.43945 32.7119 9.60791 31.8989 9.94482 31.2104C10.2817 30.5073 10.6699 29.9287 11.1094 29.4746C11.5488 29.0059 11.9883 28.6616 12.4277 28.4419C12.8672 28.2075 13.1968 28.0903 13.4165 28.0903C13.6655 28.0903 13.8486 28.1562 13.9658 28.2881C14.0977 28.4199 14.1636 28.5957 14.1636 28.8154C14.1636 29.0645 14.083 29.2549 13.9219 29.3867C13.7754 29.5039 13.585 29.6211 13.3506 29.7383C13.1162 29.8555 12.8672 30.0239 12.6035 30.2437C12.3398 30.4487 12.0908 30.7124 11.8564 31.0347C11.6367 31.3569 11.4536 31.7378 11.3071 32.1772C11.1606 32.6167 11.0874 33.1074 11.0874 33.6494C11.0874 34.1328 11.1606 34.5869 11.3071 35.0117C11.4536 35.4219 11.666 35.7808 11.9443 36.0884C12.2227 36.3813 12.5522 36.6157 12.9331 36.7915C13.314 36.9526 13.7388 37.0332 14.2075 37.0332C15.0425 37.0332 15.731 36.8428 16.2729 36.4619C16.8296 36.0664 17.2544 35.5684 17.5474 34.9678C16.6831 34.5137 15.9727 33.8691 15.416 33.0342C14.8594 32.1992 14.5811 31.2617 14.5811 30.2217C14.5811 29.3867 14.7788 28.7056 15.1743 28.1782C15.5845 27.6509 16.1191 27.3872 16.7783 27.3872C17.1738 27.3872 17.5474 27.4824 17.8989 27.6729C18.2505 27.8633 18.5581 28.1636 18.8218 28.5737C19.1001 28.9839 19.3198 29.5112 19.481 30.1558C19.6421 30.8003 19.7227 31.5693 19.7227 32.4629C19.7227 32.9316 19.6641 33.4224 19.5469 33.9351C19.6348 33.9497 19.7227 33.957 19.8105 33.957C19.8984 33.957 19.9937 33.957 20.0962 33.957C20.5942 33.957 21.041 33.8984 21.4365 33.7812C21.832 33.6641 22.1909 33.4883 22.5132 33.2539C22.8354 33.0195 23.1211 32.7192 23.3701 32.353C23.6338 31.9868 23.8828 31.562 24.1172 31.0786C24.1611 30.9907 24.2563 30.9102 24.4028 30.8369C24.5493 30.749 24.6958 30.7051 24.8423 30.7051C25.0327 30.7051 25.2085 30.7856 25.3696 30.9468C25.5454 31.0933 25.6333 31.291 25.6333 31.54C25.6333 31.6572 25.604 31.7891 25.5454 31.9355C25.4868 32.0674 25.4282 32.1919 25.3696 32.3091C25.1206 32.7485 24.8276 33.1733 24.4907 33.5835C24.1685 33.979 23.7803 34.3306 23.3262 34.6382C22.8867 34.9312 22.3887 35.1655 21.832 35.3413C21.2754 35.5171 20.6528 35.5977 19.9644 35.583ZM16.207 30.0459C16.207 30.3242 16.2437 30.6172 16.3169 30.9248C16.3901 31.2324 16.5 31.54 16.6465 31.8477C16.8076 32.1406 16.998 32.4263 17.2178 32.7046C17.4521 32.9683 17.7231 33.1953 18.0308 33.3857C18.0747 33.0781 18.0967 32.7778 18.0967 32.4849C18.0967 32.0894 18.0674 31.6865 18.0088 31.2764C17.9502 30.8662 17.8623 30.4927 17.7451 30.1558C17.6426 29.8042 17.5107 29.5259 17.3496 29.3208C17.1885 29.1011 16.998 28.9912 16.7783 28.9912C16.6904 28.9912 16.5732 29.0571 16.4268 29.189C16.2803 29.3208 16.207 29.6064 16.207 30.0459ZM25.8091 36.1323C26.0435 35.6343 26.3145 35.0996 26.6221 34.5283C26.9297 33.9424 27.2593 33.3491 27.6108 32.7485C27.9624 32.1333 28.3359 31.5254 28.7314 30.9248C29.127 30.3242 29.5371 29.7603 29.9619 29.2329C30.3867 28.7202 30.8115 28.354 31.2363 28.1343C31.6758 27.8999 32.0859 27.7827 32.4668 27.7827C32.8477 27.7827 33.1772 27.8633 33.4556 28.0244C33.7485 28.1709 33.9829 28.376 34.1587 28.6396C34.3491 28.9033 34.4883 29.2109 34.5762 29.5625C34.6787 29.9141 34.73 30.2949 34.73 30.7051C34.73 31.042 34.6934 31.4961 34.6201 32.0674C34.5615 32.624 34.5322 33.21 34.5322 33.8252C34.5322 34.1768 34.5469 34.5283 34.5762 34.8799C34.6201 35.2168 34.686 35.5244 34.7739 35.8027C34.8765 36.0664 35.0229 36.2861 35.2134 36.4619C35.4038 36.623 35.6528 36.7036 35.9604 36.7036C36.312 36.7036 36.6636 36.6084 37.0151 36.418C37.3667 36.2129 37.7109 35.9492 38.0479 35.627C38.3848 35.29 38.707 34.9238 39.0146 34.5283C39.3223 34.1182 39.6006 33.7153 39.8496 33.3198C40.0986 32.9097 40.3184 32.5215 40.5088 32.1553C40.6992 31.7744 40.853 31.4595 40.9702 31.2104C41.1167 30.8735 41.373 30.7051 41.7393 30.7051C41.9883 30.7051 42.186 30.793 42.3325 30.9688C42.479 31.1445 42.5522 31.335 42.5522 31.54C42.5522 31.6572 42.5303 31.7671 42.4863 31.8696C42.4277 31.9868 42.3105 32.2285 42.1348 32.5947C41.9736 32.9609 41.7466 33.3857 41.4536 33.8691C41.1753 34.3525 40.8457 34.8579 40.4648 35.3853C40.084 35.9126 39.6592 36.4033 39.1904 36.8574C38.7363 37.2969 38.2383 37.6631 37.6963 37.9561C37.1689 38.2344 36.6123 38.3735 36.0264 38.3735C35.3525 38.3735 34.8105 38.2344 34.4004 37.9561C33.9902 37.6631 33.668 37.2969 33.4336 36.8574C33.2139 36.418 33.0601 35.9272 32.9722 35.3853C32.8989 34.8433 32.8623 34.3159 32.8623 33.8032C32.8623 33.5396 32.8696 33.2612 32.8843 32.9683C32.9136 32.6606 32.9429 32.3604 32.9722 32.0674C33.0015 31.7744 33.0234 31.5034 33.0381 31.2544C33.0674 30.9907 33.082 30.771 33.082 30.5952C33.082 30.1411 33.0161 29.8335 32.8843 29.6724C32.7671 29.5112 32.6279 29.4307 32.4668 29.4307C32.2324 29.4307 31.9614 29.5698 31.6538 29.8481C31.3608 30.1118 31.0459 30.4634 30.709 30.9028C30.3867 31.3423 30.0571 31.8403 29.7202 32.397C29.3979 32.939 29.083 33.481 28.7754 34.0229C28.4678 34.5649 28.1895 35.085 27.9404 35.583C27.6914 36.0664 27.4863 36.4692 27.3252 36.7915C27.0176 37.4067 26.7026 37.8169 26.3804 38.022C26.0728 38.2417 25.7944 38.3516 25.5454 38.3516C25.0913 38.3516 24.7397 38.1758 24.4907 37.8242C24.2563 37.458 24.1392 37.0186 24.1392 36.5059V35.1216C24.1392 32.353 24.1392 29.7163 24.1392 27.2114C24.1538 24.6919 24.1904 22.3555 24.249 20.2021C24.3223 18.0342 24.4321 16.0786 24.5786 14.3354C24.7397 12.5776 24.9741 11.0835 25.2817 9.85303C25.5894 8.60791 25.9775 7.64844 26.4463 6.97461C26.9297 6.30078 27.5303 5.96387 28.248 5.96387C28.8633 5.96387 29.3833 6.13232 29.8081 6.46924C30.2329 6.80615 30.5771 7.26758 30.8408 7.85352C31.1045 8.4248 31.2949 9.09863 31.4121 9.875C31.5293 10.6367 31.5879 11.4424 31.5879 12.292C31.5879 14.0205 31.4268 15.7197 31.1045 17.3896C30.7969 19.0449 30.3794 20.6636 29.8521 22.2456C29.3247 23.8276 28.7095 25.373 28.0063 26.8818C27.3032 28.376 26.5635 29.8335 25.7871 31.2544C25.7871 31.5181 25.7871 31.833 25.7871 32.1992C25.7871 32.5654 25.7871 32.9316 25.7871 33.2979C25.7871 33.6641 25.7871 34.0083 25.7871 34.3306C25.7871 34.6528 25.7871 34.9092 25.7871 35.0996L25.8091 36.1323ZM25.8091 28.0244C26.4243 26.6768 26.981 25.3657 27.479 24.0913C27.9917 22.8022 28.4238 21.5205 28.7754 20.2461C29.1416 18.9717 29.4272 17.6826 29.6323 16.3789C29.8374 15.0605 29.9399 13.6909 29.9399 12.27C29.9399 12.0356 29.9253 11.6621 29.896 11.1494C29.8813 10.6367 29.8154 10.1167 29.6982 9.58936C29.5957 9.06201 29.4272 8.60059 29.1929 8.20508C28.9731 7.80957 28.6582 7.61182 28.248 7.61182C27.9258 7.61182 27.6475 7.83154 27.4131 8.271C27.1787 8.6958 26.9736 9.28174 26.7979 10.0288C26.6221 10.7612 26.4756 11.6182 26.3584 12.5996C26.2412 13.5811 26.146 14.6211 26.0728 15.7197C25.9995 16.8184 25.9409 17.9463 25.897 19.1035C25.8677 20.2607 25.8457 21.3887 25.8311 22.4873C25.8164 23.5713 25.8091 24.5894 25.8091 25.5415C25.8091 26.4937 25.8091 27.3213 25.8091 28.0244Z"
        fill="#FAA2C1"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M48.3419 32.0312C48.0107 32.0312 47.7189 32.2473 47.6124 32.5609C44.4645 41.8303 35.6888 48.5 25.3552 48.5C15.0216 48.5 6.24588 41.8303 3.098 32.5609C2.9915 32.2473 2.69972 32.0312 2.36852 32.0312V32.0312C1.8632 32.0312 1.49958 32.5168 1.6611 32.9956C4.99589 42.8815 14.3442 50 25.3552 50C36.3662 50 45.7145 42.8815 49.0493 32.9956C49.2108 32.5168 48.8472 32.0312 48.3419 32.0312V32.0312ZM2.36852 17.9688C2.69972 17.9688 2.9915 17.7527 3.098 17.4391C6.24588 8.16973 15.0216 1.5 25.3552 1.5C35.6888 1.5 44.4645 8.16973 47.6124 17.4391C47.7189 17.7527 48.0107 17.9688 48.3419 17.9688V17.9688C48.8472 17.9688 49.2108 17.4832 49.0493 17.0044C45.7145 7.11846 36.3662 0 25.3552 0C14.3442 0 4.99589 7.11846 1.6611 17.0044C1.49958 17.4832 1.8632 17.9688 2.36852 17.9688V17.9688Z"
        fill="#FAB005"
      />
      <circle cx="1.5625" cy="25" r="1.5625" fill="#FAA2C1" />
      <circle cx="48.4375" cy="25" r="1.5625" fill="#FAA2C1" />
    </svg>
  );
}

export default MainLogo;
