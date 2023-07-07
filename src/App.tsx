import Icon1 from "./asset/icon-1.svg";
import Icon2 from "./asset/icon-2.svg";
import Icon3 from "./asset/icon-3.svg";
import Icon4 from "./asset/icon-4.svg";

import img1 from "./asset/screen-1.png";
import img2 from "./asset/screen-2.png";
import img3 from "./asset/screen-3.png";
import img4 from "./asset/screen-4.png";
import img5 from "./asset/screen-5.png";
import img6 from "./asset/screen-6.png";
import img7 from "./asset/screen-7.png";

import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import Footer from "./sections/Footer";
import ForthSection from "./sections/ForthSection";
import { CarouselWrapper } from "react-pretty-carousel";

export type ChipsDataType = {
  key: string;
  title: string;
};

export type AccordionDataType = {
  key: string;
  header: string;
};

export type CardDataType = {
  index: string;
  title: string;
  sub1: string;
  sub2: string;
  icon: React.ReactElement<any, any>;
};

const CHIPSDATA: ChipsDataType[] = [
  {
    key: "1",
    title: "Cursus Integer",
  },
  {
    key: "2",
    title: "Integer Consequat",
  },
  {
    key: "3",
    title: "Tellus Euismod Pellentesque",
  },
  {
    key: "4",
    title: "Aliquot Tristique",
  },
  {
    key: "5",
    title: "Pellentesque Tempus",
  },
  {
    key: "6",
    title: "Mauris Fermentum Praesent",
  },
];

const CARDDATA: CardDataType[] = [
  {
    index: "1",
    title: "Phasellus Vitae",
    sub1: "Quisque",
    sub2: "Porttitor vitae vel amet",
    icon: <Icon1 />,
  },
  {
    index: "2",
    title: "Phasellus Vitae",
    sub1: "Porttitor",
    sub2: "Neque Scelerisque Mattis. ",
    icon: <Icon2 />,
  },
  {
    index: "3",
    title: "Eleifend Pulvinar",
    sub1: "Vitae",
    sub2: "Consectetur Nibh Velit",
    icon: <Icon3 />,
  },
  {
    index: "4",
    title: "Velit Odio Phir",
    sub1: "Ametneq",
    sub2: "Magna Consectetur Leo.",
    icon: <Icon4 />,
  },
];

const ACCORDIONDATA: AccordionDataType[] = [
  {
    key: "1",
    header: "Quam vehicula faucibus amet lorem.",
  },
  {
    key: "1",
    header: "Pellentesque tempus sed phasellus vel.",
  },
  {
    key: "1",
    header: "Mauris fermentum praesent tellus euismod pellentesque urna ac massa in.",
  },
  {
    key: "1",
    header: "Vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et.",
  },
  {
    key: "1",
    header: "Sollicitudin ornare tempus felis nulla varius pulvinar nibh viverra ornare.",
  },
  {
    key: "1",
    header: "Consectetur nibh velit magna consectetur leo.",
  },
  {
    key: "1",
    header: "Quisque porttitor vitae vel amet neque scelerisque mattis. ",
  },
];

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function App() {
  return (
    <div className="relative flex flex-col items-center">
      <FirstSection data={CHIPSDATA} />
      <SecondSection data={CARDDATA} />
      <ThirdSection />
      <ForthSection data={ACCORDIONDATA} />
      <section
        id="geeks3"
        className="relative flex h-auto w-full flex-col items-center py-20 desktop:w-full">
        <div className="flex w-350px flex-col items-center laptop:w-1040px desktop:w-1600px">
          <span className="text-center text-4xl font-bold text-white desktop:text-6xl">
            Demo of the Website Carousel
          </span>
          <CarouselWrapper items={3} mode="gallery" showControls={true} loop>
            {images.map((i, index) => (
              <img src={i} alt="" key={index} />
            ))}
          </CarouselWrapper>
        </div>
      </section>
      <Footer />
    </div>
  );
}
