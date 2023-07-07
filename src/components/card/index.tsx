import React from "react";
import { useSpring, animated } from "@react-spring/web";

import { CardDataType } from "../../App";

const Card: React.FC<CardDataType> = ({ title, sub1, sub2, icon, index }) => {
  const [{ backgroundColor, color }, set] = useSpring(() => ({
    backgroundColor: "white",
    color: "#262626",
    config: {
      mass: 1,
      tension: 170,
      friction: 10,
      damping: 15,
    },
  }));

  const odd = parseInt(index) % 2;

  return (
    <div className={`relative ${!odd && "desktop:top-20"}`}>
      <animated.div
        style={{ backgroundColor }}
        onMouseEnter={() => set({ backgroundColor: "#262626", color: "#fff" })}
        onMouseLeave={() => set({ backgroundColor: "white", color: "#262626" })}
        className="flex h-full w-full flex-col rounded-[60px] p-50px">
        {icon}
        <div className="flex items-baseline pt-6 pb-2 text-7xl font-bold">
          <animated.span style={{ color }}>{index}</animated.span>
          <animated.span
            style={{ color }}
            className="ml-1 flex h-3 w-3 items-end rounded-full bg-yellow"
          />
        </div>
        <animated.span style={{ color }} className="text-2xl font-bold">
          {title}
        </animated.span>
        <div className="texty-lg flex flex-col pt-5 font-light">
          <animated.span style={{ color }} className="text-xl font-semibold">
            {sub1}
          </animated.span>
          <animated.span style={{ color }}> {sub2}</animated.span>
        </div>
      </animated.div>
    </div>
  );
};

export default Card;
