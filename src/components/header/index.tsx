import React from "react";

import Logo from "../../asset/logo";
import Flag from "../../asset/flag";
import ArrowDropDown from "../../asset/arrow-drop-down.svg";

const Header = () => {
  return (
    <div className="grid w-full grid-cols-2 items-center justify-between rounded-full bg-white px-22px py-3 desktop:grid-cols-3 desktop:px-30px desktop:py-4">
      <div className="hidden desktop:block" />
      <div className="flex justify-start desktop:justify-center">
        <Logo className="w-[95px] desktop:w-[127px]" />
      </div>
      <div className="flex justify-end gap-7px">
        <Flag className="w-[27px] desktop:w-[36px]" />
        <ArrowDropDown />
      </div>
    </div>
  );
};

export default Header;
