import React from "react";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="stars"></div>

      <div className="stadium-lights stadium-lights-left"></div>
      <div className="stadium-lights stadium-lights-right"></div>

      <div className="hero-content">
        <h1 className="hero-title">
           kaalBet Online: India's Most Trusted Legal Online Gaming Platform
        </h1>

        <p className="hero-date">Last Updated: January 27, 2026</p>

        <p className="hero-description">
          We provide you with an online ID for cricket, casino, and more than
          5000+ games. Join India's leading online gaming site for incredible
          odds and a secure gaming experience.
        </p>
        <a
        href="https://api.whatsapp.com/send?phone=66909885852"
        
        target="_blank"
        rel="noreferrer"
      >
         <button className="cta-button">
          Whatsapp to get online cricket ID
        </button>
      </a>
       
      </div>
    </section>
  );
}

export default HeroSection;