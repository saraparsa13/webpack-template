import React from "react";
import { useSpring, animated } from "@react-spring/web";

import bgImg from "../asset/figure-1.png";
import img from "../asset/circle.png";
import TrendingFlatLeft from "../asset/trending-flat";
import TrendingFlatRight from "../asset/trending-flat-right";

import css from "../App.module.scss";

const ThirdSection = () => {
  const [{ backgroundPositionY, titleColor, nameColor }, set] = useSpring(() => ({
    backgroundPositionY: 750,
    titleColor: "#262626",
    nameColor: "#262626",
    config: {
      mass: 1,
      tension: 170,
      friction: 10,
      damping: 15,
    },
  }));

  return (
    <section
      id="geeks3"
      className="relative flex h-auto w-full flex-col items-center py-5 desktop:w-full desktop:py-48">
      <animated.div
        onMouseEnter={() =>
          set({ backgroundPositionY: 0, titleColor: "#fff", nameColor: "#F9B800" })
        }
        onMouseLeave={() =>
          set({ backgroundPositionY: 750, titleColor: "#262626", nameColor: "#262626" })
        }
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPositionY: backgroundPositionY,
        }}
        className={`${css.background} flex w-350px w-350px flex-col items-center rounded-[100px] bg-white py-10 laptop:w-1040px desktop:mx-40 desktop:w-1600px desktop:flex-row desktop:py-24 desktop:pl-32`}>
        <img src={img} className="w-[272px] desktop:w-[472px]" alt="circle" />

        <div className="flex flex-col px-7 pt-10 text-center desktop:p-72px desktop:text-start">
          <animated.span
            style={{ color: titleColor }}
            className="text-3xl font-bold desktop:text-5xl">
            What our <br className="desktop:hidden" />
            customers thought?
          </animated.span>
          <animated.span
            style={{ color: titleColor }}
            className="pb-5 pt-10 text-base font-light text-dark desktop:text-3xl">
            Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit
            rutrum at mauris enim pulvinar duis etiam duis.{" "}
          </animated.span>
          <animated.span style={{ color: nameColor }} className="text-2xl font-bold">
            Holly Davidson
          </animated.span>
          <div className="flex justify-center gap-10 pt-30px desktop:justify-start desktop:pt-10">
            <TrendingFlatLeft className={css.fillClass} />
            <TrendingFlatRight />
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default ThirdSection;
