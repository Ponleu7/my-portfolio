"use client";
import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  texts: string[];
  speed: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ texts, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = texts[textIndex];

    const interval = setInterval(() => {
      if (!isBackspacing && charIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isBackspacing && charIndex >= 0) {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      } else if (!isBackspacing && charIndex > currentText.length) {
        setIsBackspacing(true);
        setTimeout(() => {
          setIsBackspacing(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setCharIndex(0);
        }, 1000); // Delay before moving to the next text
      }
    }, speed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blinking cursor interval

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [texts, speed, textIndex, charIndex, isBackspacing]);

  return (
    <span>
      {displayText}
      {/* {showCursor && <span style={{ marginLeft: "2px" }}>|</span>} */}
    </span>
  );
};

export default TypeWriter;
