import React, { FC, ReactElement } from "react";
import { animated, SpringValue } from "@react-spring/web";

const Svg: FC<
  React.SVGProps<SVGSVGElement> & { rectFill: SpringValue<string>; pathFill: SpringValue<string> }
> = (props): ReactElement => (
  <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" {...props}>
    <animated.rect width="56" height="56" rx="28" style={{ fill: props.rectFill }} />
    <animated.path
      d="M44 30.6846H30.6846V44H26.3154V30.6846H13V26.3154H26.3154V13H30.6846V26.3154H44V30.6846Z"
      style={{ fill: props.pathFill }}
    />
  </svg>
);

export default Svg;
