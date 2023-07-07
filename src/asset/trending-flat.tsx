import React, { FC, ReactElement } from "react";

const Svg: FC<React.SVGProps<SVGSVGElement>> = (props): ReactElement => (
  <svg width="40" height="17" viewBox="0 0 40 17" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 8.5L8.30078 0.199219L8.30078 6.44922L39.5508 6.44922V10.5508L8.30078 10.5508L8.30078 16.8008L0 8.5Z" />
  </svg>
);

export default Svg;
