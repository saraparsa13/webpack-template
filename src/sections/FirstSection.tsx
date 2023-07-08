import React from "react";
import Header from "../components/header";
import ReactTyped from "react-typed";
import Chips from "../components/chips";
import Button from "../components/button";
import FirstSectionLogo from "../asset/drawkit-1";
import { ChipsDataType } from "../App";

interface Props {
  data: ChipsDataType[];
}

const FirstSection: React.FC<Props> = ({ data }): React.ReactElement => {
  return (
    <section
      id="geeks1"
      className="relative flex h-auto w-full flex-col items-center pt-5 desktop:w-full desktop:pt-60px">
      <div className="desktop: flex w-350px flex-col items-center laptop:w-1040px desktop:w-1600px">
        <Header />
        <div className="flex w-full flex-col-reverse items-center justify-end gap-3 pt-0 desktop:flex-row desktop:pt-68px">
          <div className="flex flex-col pl-0 pt-0 desktop:pl-8 desktop:pt-12">
            <span className="text-base font-bold text-yellow desktop:text-3xl">
              RISUS PRAESENT VULPUTATE.
            </span>
            <span className="text-4xl font-bold leading-48px text-dark desktop:text-5rem desktop:leading-90px">
              Cursus Integer
              <br />
              Consequat{" "}
              <ReactTyped
                strings={["Trisqie."]}
                typeSpeed={30}
                loop
                backDelay={1500}
                backSpeed={30}
                startDelay={500}
                showCursor={true}
              />
            </span>
            <div className="flex flex-wrap gap-14px pb-10 pt-30px desktop:py-60px">
              {data.map((chips: ChipsDataType) => (
                <Chips key={chips.key} title={chips.title} />
              ))}
            </div>
            <Button title="Lorem Ipsum" />
          </div>
          <FirstSectionLogo className="w-[350px] laptop:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
