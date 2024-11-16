import React, { useState } from "react";
import GreenButton from "./UI/button/GreenButton";

const Hero = () => {
  const plants = [
    {
      name: "Landak Plants",
      image: "/assets/images/plant2.png",
    },
    {
      name: "Kaktus Plants",
      image: "/assets/images/plant1.png",
    },
    {
      name: "Kecubung Plants",
      image: "/assets/images/plant4.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const getNextIndex = () => (currentIndex + 1) % plants.length;

  const getPrevIndex = () =>
    (currentIndex - 1 + plants.length) % plants.length;

  const handlePrevious = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(getPrevIndex());
      setFade(false);
    }, 300);
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(getNextIndex());
      setFade(false);
    }, 300);
  };

  return (
    <div className="hero-section">
      <div className={`image-container ${fade ? "fade" : ""}`}>
        <img
          src={plants[currentIndex].image}
          alt={plants[currentIndex].name}
        />
      </div>
      <div className="text-container">
        <div className={`value ${fade ? "fade" : ""}`}>
          <h1>{plants[currentIndex].name}</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
        </div>
        <div className="buttons">
          <GreenButton
            paragraph="← Previous"
            h3={plants[getPrevIndex()].name}
            onClick={handlePrevious}
          />
          <GreenButton
            paragraph="Next →"
            h3={plants[getNextIndex()].name}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
