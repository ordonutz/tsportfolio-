import React from 'react';
import { Text } from '@mantine/core';
/*
TO DO: 
  - interface for props
  - outline what props should be
  - styles
*/
function BlobIcon() {
  return (
  <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', paddingLeft:'11%', background: "blue"}}>
<svg width="742" height="641" viewBox="0 0 742 641" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_ii_45_408)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M366.113 2.76529C423.684 13.6244 457.585 71.085 505.642 104.57C549.007 134.786 598.681 152.787 635.635 190.564C680.295 236.218 745.384 282.304 741.863 346.048C738.297 410.608 666.49 448.021 618.988 491.928C582.579 525.582 540.521 548.807 496.929 572.445C454.44 595.485 413.638 620.207 366.113 629.052C311.989 639.124 253.379 650.866 203.776 627C153.46 602.791 131.302 545.61 98.6326 500.354C62.3829 450.139 7.92252 407.57 0.95776 346.048C-6.13374 283.405 27.3719 223.358 61.2546 170.178C94.2284 118.425 138.642 75.0448 192.451 45.4958C245.603 16.3075 306.516 -8.47606 366.113 2.76529Z" fill="#716B6B"/>
</g>
<defs>
<filter id="filter0_ii_45_408" x="-4" y="-4" width="750" height="649" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="-4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_45_408"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-4" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_45_408" result="effect2_innerShadow_45_408"/>
</filter>
</defs>
</svg>
    <div style={{position: "absolute", background: 'yellow'}}>
      <Text>Hey, I’m Leslie O. H. <br/>
      Junior Software Engineer <br/>
      I'm a recent computer science b.s. grad. I dabble in 
      front end work using React + TypeScript.<br/>
      Outside of work, I enjoy learning UI design in Figma, brushing up on my C++, <br/>
      and spending time time with my dog Nebula.</Text>
    </div>
  </div>
  )
}

export default BlobIcon;

 