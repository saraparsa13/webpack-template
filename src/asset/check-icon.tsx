import React, { FC, ReactElement } from "react";

const Svg: FC<React.SVGProps<SVGSVGElement>> = (props): ReactElement => (
  <svg {...props} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="icon">
      <path
        id="check_circle"
        d="M15 2.51953C8.08594 2.51953 2.51953 8.08594 2.51953 15C2.51953 21.9141 8.08594 27.4805 15 27.4805C21.9141 27.4805 27.4805 21.9141 27.4805 15C27.4805 8.08594 21.9141 2.51953 15 2.51953ZM15 25.0195C9.49219 25.0195 4.98047 20.5078 4.98047 15C4.98047 9.49219 9.49219 4.98047 15 4.98047C20.5078 4.98047 25.0195 9.49219 25.0195 15C25.0195 20.5078 20.5078 25.0195 15 25.0195ZM20.7422 9.49219L12.4805 17.6953L9.25781 14.4727L7.5 16.2305L12.4805 21.2695L22.5 11.25L20.7422 9.49219Z"
        fill="#F9B800"
      />
    </g>
  </svg>
);

export default Svg;
