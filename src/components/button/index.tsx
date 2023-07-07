/* eslint-disable */
import React from "react";
import ArrowRight from "../../asset/arrow-right";
import css from "./index.module.scss";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  title: string;
  light?: boolean;
}

const Button: React.FC<Props> = ({ title, light }): React.ReactElement => {
  const [{ y }, set] = useSpring(() => ({
    y: 0,
    config: {
      mass: 1,
      tension: 170,
      friction: 5,
      damping: 15,
    },
  }));

  return (
    <div
      onMouseEnter={() => set({ y: 90 })}
      onMouseLeave={() => set({ y: 0 })}
      datatype={light ? "light": "yellow"}
      className={`${css.button} gap-auto desktop:justify-auto flex w-full cursor-pointer items-center justify-between rounded-full px-10 py-4 text-2xl font-bold desktop:w-fit desktop:gap-20 desktop:px-50px desktop:pb-6 desktop:pt-22px`}>
      <span>{title}</span>
      <animated.div style={{ transform: y.interpolate((v) => `rotate(${v}deg`) }}>
        <ArrowRight className={css.arrowRight} />
      </animated.div>
    </div>
  );
};

export default Button;
