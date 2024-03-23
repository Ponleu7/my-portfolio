import React from "react";
import TypeWriter from "./TypeWriter";
import { PiCursorClickBold } from "react-icons/pi";
import { ImageSlider } from "./ImageSilder";

const Hero = () => {
  const texts = ["Developer", "Footballer", "Bank Staff"]; // Array of texts
  const speed = 400; // Typing speed in milliseconds per character

  const text2 = ["YOU", "Happiness."]; // Array of texts
  const speed2 = 600;
  return (
    <div className="min-h-screen px-2 lg:px-16 lg:flex justify-between">
      <div className="pt-10 lg:pt-24 w-full ">
        <div className="py-2 lg:text-2xl font-medium h-12">
          Hi, I am a{" "}
          <span className="text-main text-xl lg:text-3xl font-medium mt-5">
            <TypeWriter texts={texts} speed={speed} />
          </span>
          <span className="text-main text-xl lg:text-3xl font-medium ml-[2px]">
            |
          </span>
        </div>
        <div className="lg:flex lg:text-2xl font-medium h-12">
          Now, I can&apos;t find myself, but what I want is
          <span className="text-yellow-500 lg:text-3xl text-xl font-semibold ml-2 lg:inline-block">
            <TypeWriter texts={text2} speed={speed2} />
          </span>{" "}
        </div>
        <div className="pt-12 w-full lg:w-[600px] pb-10 lg:pb-1">
          My name is <span className="text-main font-medium">Phon Ponleu</span>.
          At present, I find myself in a period of uncertainty regarding my
          future career path. I am currently a third-year student at the{" "}
          <span className="text-blue-700 font-medium">
            Cambodia Academy of Digital Technology (CADT)
          </span>
          , majoring in Computer Science.
        </div>
      </div>

      <div className="lg:mr-16">
        <ImageSlider />
      </div>
    </div>
  );
};

export default Hero;
