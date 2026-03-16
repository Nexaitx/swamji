import React from "react";
import hero from "../assets/our_partner_backgroundImg.webp";
import ball from "../assets/Group-1.webp";
import ball2 from "../assets/Group-2.webp";
import ball3 from "../assets/b_3webp.webp";
import ball4 from "../assets/b_4webp.webp";

function StepsSection() {
  return (
    <section
      className="steps-section"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="overlay">

        <h1>
          How to Get an Online Cricket Betting ID & Start at KaalBet Online?
        </h1>

        <div className="steps-grid">

          <div className="step">
            <img src={ball} alt="step" />
            <h3>Step 1: Message us on WhatsApp number</h3>
            <p>
              Message us to request your cricket ID or casino ID and get started.
            </p>
          </div>

          <div className="step">
            <img src={ball2} alt="step" />
            <h3>Step 2: Customer satisfaction guaranteed</h3>
            <p>
              We will address all your questions, queries, and concerns with
              full transparency and ensure your complete satisfaction.
            </p>
          </div>

          <div className="step">
            <img src={ball3} alt="step" />
            <h3>Step 3: Start depositing & withdrawing instantly</h3>
            <p>
              We make your money transactions instantly and with ease.
            </p>
          </div>

          <div className="step">
            <img src={ball4} alt="step" />
            <h3>Step 4: Earn from your skills</h3>
            <p>
              Use your gaming skills to make, win, play and earn!
            </p>
          </div>

        </div>

        <p className="bottom-text">
          KaalBet Online is India’s most trusted platform for providing sport
          IDs. Get your sports ID now. Contact us via WhatsApp. For any queries,
          emergencies, feedback or complaints. We are here to help you 24/7
          with our online services.
        </p>

      </div>
    </section>
  );
}

export default StepsSection;