import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";

import "./styles/main.scss";
import FeaturedPlants from "./components/FeaturedPlants";
import RelaxedSection from "./components/RelaxedSection";
import PromoSection from "./components/PromoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Advantages />
      <FeaturedPlants/>
      <RelaxedSection/>
      <PromoSection/>
      <Footer/>
    </div>
  );
}

export default App;
