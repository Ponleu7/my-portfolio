import React from "react";
import TypeWriter from "./TypeWriter";

const Hero = () => {
  const texts = ["!Developer", "Footballer", "!Banker"]; // Array of texts
  const speed = 200; // Typing speed in milliseconds per character
  return (
    <div>
      <div className="py-24">
        Hi, I am a{" "}
        <span className="text-main">
          <TypeWriter texts={texts} speed={speed} />
        </span>
      </div>
    </div>
  );
};

export default Hero;
