import React, { FC, ReactElement } from "react";
import { animated } from "@react-spring/web";

const Svg: FC<any> = (props): ReactElement => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <animated.rect width="56" height="56" rx="28" style={{ fill: props.rectFill }} />
    <animated.path d="M43 30.5282H13V26.3H43V30.5282Z" style={{ fill: props.pathFill }} />
  </svg>
);

export default Svg;
