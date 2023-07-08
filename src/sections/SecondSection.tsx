import React from "react";
import Button from "../components/button";
import { CardDataType } from "../App";
import Card from "../components/card";

interface Props {
  data: CardDataType[];
}

const SecondSection: React.FC<Props> = ({ data }) => {
  return (
    <section
      id="geeks2"
      className="relative flex h-auto w-full flex-col items-center pt-5 desktop:w-full desktop:py-48">
      <div className="flex w-350px flex-col justify-between pt-24 laptop:w-1040px desktop:w-1600px desktop:flex-row desktop:items-center">
        <div className="flex flex-col desktop:w-1/3">
          <span className="text-xl font-light text-yellow">
            Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh velit magna
            consectetur leo.
          </span>
          <span className="pb-30px pt-5 text-4xl font-bold text-white desktop:pb-60px">
            Cursus Integer Conseq Aliquam Tristique.
          </span>
          <Button light title="Lorem Ipsum" />
        </div>
        <div className="desktop:pt-auto desktop:gap-15 relative grid gap-8 pt-50px laptop:grid-cols-2 desktop:pt-0">
          {data.map((data, index) => (
            <Card
              key={index}
              index={data.index}
              title={data.title}
              sub1={data.sub1}
              sub2={data.sub2}
              icon={data.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
