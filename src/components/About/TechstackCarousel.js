import React, { useState, useEffect, useRef } from "react";
import "./TechstackCarousel.css";
import {
  html,
  css,
  javascript,
  reactLogo,
  formikLogo,
  materialuiLogo,
  bootstrapLogo,
  firebaseLogo,
  mysqlLogo,
  postgresLogo,
} from "./images.js";

function TechstackCarousel() {
  const images = [
    html,
    css,
    javascript,
    reactLogo,
    formikLogo,
    materialuiLogo,
    bootstrapLogo,
    firebaseLogo,
    mysqlLogo,
    postgresLogo,
  ];
  const delay = 3000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  });

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, i) => (
          <div
            key={i}
            className={`slideshowDot${index === i ? " active" : ""}`}
            onClick={() => {
              setIndex(i);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default TechstackCarousel;
