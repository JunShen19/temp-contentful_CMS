import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            dolorem, impedit aliquid reiciendis quibusdam deserunt illo in est
            sunt a recusandae. Quaerat, nobis. Laborum qui optio nisi dolorum
            vel. Accusamus.
          </p>
        </div>
        <div className="hero-container">
          <img src={heroImg} alt="woman and coffee" className="img"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
