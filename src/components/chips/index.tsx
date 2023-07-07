import React from "react";
import CheckIcon from "../../asset/check-icon";

interface Props {
  key: string;
  title: string;
}

const Chips: React.FC<Props> = ({ key, title }): React.ReactElement => {
  return (
    <div
      className="destop:pr-10 font-font-semibold flex w-fit items-center gap-14px rounded-full bg-white py-3 pl-4 pr-30px text-xl desktop:gap-7px desktop:py-3.5 desktop:pl-5"
      key={key}>
      <CheckIcon className="w-[25px] desktop:w-[30px]" />
      <span>{title}</span>
    </div>
  );
};

export default Chips;
