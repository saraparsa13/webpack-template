import React from "react";
import Button from "../components/button";

const Footer = () => {
  return (
    <footer
      id="geeks1"
      className="relative flex h-auto w-full flex-col items-center pt-5 desktop:w-full desktop:pt-48">
      <div className="relative top-14 flex w-350px flex-col laptop:w-1040px desktop:w-1600px">
        <span className="pb-30px text-3xl font-bold">
          Vulputate et pulvinar ethre Suspendisse tellus consecteur
        </span>
        <Button title="Lorem Ipsum" />
        <hr className="mb-8 mt-9 bg-dark" />
        <span className="font-light">Copyright © 2022 Lorem Ipsum.</span>
        <span className="font-light">Privacy Policy | Terms & Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
