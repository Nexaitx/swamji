import React, { useState, useEffect } from "react";
import logo1 from "../assets/vitality-blast-cricket-id.webp";
import logo2 from "../assets/Swamiji-club-online-sunny.webp";
import logo3 from "../assets/get-aviator-id.webp";
import logo4 from "../assets/swamiji-live-exchange.webp";


function BettingSection() {
   const images = [logo1, logo2, logo3, logo4];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(slider);

  }, [images.length]);
  return (
    <section className="betting-section">
      <div className="betting-container">

        <div className="betting-left">
          <h2 className="betting-title">
            Play with India's Most Legal Online Betting ID Provider
          </h2>

          <p className="betting-description">
            The first step to success in cricket betting is a proper platform.
            KaalBet Online has built a reputation as a
            <span className="highlight-text"> trusted betting ID provider</span>
            through continuously providing reliable services. Think of it as
            your entry point into the exciting world of online sports and casino gaming.
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

       <div className="betting-right">

          <div>
            <img
              src={images[current]}
              alt="logo"
              style={{width:"600px", height:"400px"}}
            />
          </div>

          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${current === index ? "active" : ""}`}
              ></span>
            ))}
          </div>

        </div>

      </div>

      
    </section>
  );
}

export default BettingSection;