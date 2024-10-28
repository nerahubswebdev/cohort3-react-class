import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="description">
          <h1>Hi, I’m Sagar 👋</h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive.Even though I have been creating web applications for
            over 7years, I still love it as if it was something new.
          </p>
          <p>
            <strong>Location:</strong> Ahmedabad, India
          </p>
          <p>
            <strong>Status:</strong> Available for new projects
          </p>
        </div>
        <div className="image">
          <img
            src="https://t4.ftcdn.net/jpg/07/08/47/75/360_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg"
            alt="Sagar's Photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
