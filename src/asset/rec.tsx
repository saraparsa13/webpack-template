import React, { FC, ReactElement } from "react";

const Svg: FC<React.SVGProps<SVGSVGElement>> = (props): ReactElement => (
  <svg
    {...props}
    // width="1920"
    // height="2134"
    viewBox="0 0 1920 2134"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M-2.9973 409.47L1922 0V1724L-3 2133L-2.9973 409.47Z" fill="#262626" />
  </svg>
);

export default Svg;
