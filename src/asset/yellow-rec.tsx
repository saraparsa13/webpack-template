import React, { FC, ReactElement } from "react";

const Svg: FC<React.SVGProps<SVGSVGElement>> = (props): ReactElement => (
  <svg
    {...props}
    // width="375"
    // height="1552"
    viewBox="0 0 375 1552"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M0.000527762 80.1833L375 0V1470.94L0 1551.03L0.000527762 80.1833Z" fill="#F9B800" />
  </svg>
);

export default Svg;
