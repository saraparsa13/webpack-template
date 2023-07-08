import React from "react";
import Accordion from "../components/accordion";
import { AccordionDataType } from "../App";

interface Props {
  data: AccordionDataType[];
}

const ForthSection: React.FC<Props> = ({ data }) => {
  return (
    <section
      id="geeks2"
      className="relative flex h-auto w-full flex-col items-center pt-5 desktop:w-full desktop:pt-60px">
      <div className="flex w-350px flex-col items-center laptop:w-1040px desktop:w-1600px">
        <span className="text-center text-4xl font-bold text-white desktop:text-6xl">
          Phasellus a vitae iaculis magna.
        </span>
        <span className="w-2/3 pb-10 pt-5 text-center text-base text-white desktop:pb-90px desktop:text-3xl desktop:font-light">
          {" "}
          Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
        </span>
        {data.map((d) => (
          <Accordion header={d.header} key={d.key} />
        ))}
      </div>
    </section>
  );
};

export default ForthSection;
