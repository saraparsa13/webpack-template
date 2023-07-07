import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import PlusIcon from "../../asset/plus";
import CloseIcon from "../../asset/close";

import css from "./index.module.scss";
import { AccordionDataType } from "../../App";

const Accordion: React.FC<AccordionDataType> = ({ header, key }) => {
  return (
    <div className="w-full">
      <AccordionItem header={header} key={key} />
    </div>
  );
};

const AccordionItem: React.FC<AccordionDataType> = ({ header }) => {
  const [{ height, rectFill, pathFill }, set] = useSpring(() => ({
    height: 0,
    rectFill: "white",
    pathFill: "#F9B800",
    config: {
      mass: 1,
      tension: 170,
      friction: 10,
      damping: 15,
    },
  }));

  const [show, setShow] = useState(false);

  return (
    <div className="mb-6 overflow-hidden rounded-[40px] text-2xl desktop:text-3xl">
      <div
        onClick={() => {
          setShow(!show);
          set({ height: show ? 0 : 150 });
        }}
        className="flex cursor-pointer select-none items-center justify-between bg-white p-30px font-bold text-dark laptop:py-10 laptop:pl-90px laptop:pr-60px">
        <span>{header}</span>
        <span
          onMouseEnter={() => set({ rectFill: "#F9B800", pathFill: "white" })}
          onMouseLeave={() => set({ rectFill: "white", pathFill: "#F9B800" })}
          className={css.icon}>
          {show ? (
            <CloseIcon rectFill={rectFill} pathFill={pathFill} />
          ) : (
            <PlusIcon rectFill={rectFill} pathFill={pathFill} />
          )}
        </span>
      </div>

      {show ? (
        <>
          <animated.p
            style={{ height }}
            className="hidden bg-white p-5 pl-90px pr-60px font-normal laptop:block">
            Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit
            rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus
            euismod.
          </animated.p>
          <animated.p style={{ height }} className="block bg-white p-5 font-normal laptop:hidden">
            Euismod magna id purus eget nunc ligula suspendisse dui netus.
          </animated.p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default Accordion;
