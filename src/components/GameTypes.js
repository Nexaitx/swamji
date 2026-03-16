import React from "react";
import ball from "../assets/ball-Image.webp";

function GameTypes() {

  const leftList = [
    "Outright (Winner)",
    "Over/Under Markets",
    "Player Profile",
    "Innings Runs",
    "Man of the Match"
  ];

  const rightList = [
    "Top Bowler Profile",
    "Team Profile",
    "Series Bets",
    "Win Toss Probability",
    "Handicaps"
  ];

  return (
    <section className="games-section">

      <h1>Types of Online Games in India</h1>

      <p className="games-desc">
        Before you get started on the KaalBet online gaming platform, it is
        important to know that there are different types of cricket wagering.
        All with different strategies and opportunities to maximise your
        winnings.
      </p>

      <h3 className="popular-title">
        Popular Online Gaming Options
      </h3>

      <div className="games-grid">

        <ul>

          {leftList.map((item,index)=>(
            <li key={index}>
              <img src={ball} alt="ball"/>
              {item}
            </li>
          ))}

        </ul>

        <ul>

          {rightList.map((item,index)=>(
            <li key={index}>
              <img src={ball} alt="ball"/>
              {item}
            </li>
          ))}

        </ul>

      </div>
       <a
        href="https://api.whatsapp.com/send?phone=66909885852"
        
        target="_blank"
        rel="noreferrer"
      >
         <button className="cta-btn">
          Whatsapp to get online cricket ID
        </button>
      </a>

      

    </section>
  );
}

export default GameTypes;