import React from 'react';

const Hero = () => {
  return (
    <div class="hero-section">
      <div class="image-container">
        <img src="/assets/images/flower.png" alt="Plant Image" />
      </div>
      <div class="text-container">
        <div class="value">
          <h1>Kembang Flower Mantap</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        </div>
        <div class="buttons">
          <button class="btn previous">
            <p>← Previous</p>
            <h3>Kaktus Plant</h3>
          </button>
          <button class="btn next">
            <p>Next→</p>
            <h3>Rahasia Plant</h3>
          </button>
        </div>
      </div>
    </div>

  );
};

export default Hero;
