import React from "react";
import leftImg from "../assets/Group61.webp";
import rightImg from "../assets/Group-7.webp";

function AboutSectionOne(){

return(

<section className="about-sectionOne">

<h1>
About <span>KaalBet</span> Online
</h1>

<p>
KaalBet Online is India’s most trusted Cricket ID provider.
If you’re a cricket fan looking to gamble on this year’s IPL,
T20Is, Cricket World Cup, and other major cricket events,
you have come to the right place.
When you connect with us on WhatsApp,
we will prepare your online Cricket ID free of charge!
</p>

<p>
kaalBet Online believes in providing you with the best odds,
the fastest withdrawals, and an enjoyable gameplay experience.
We will turn your passion for cricket into real money.
Don’t be late, join and start winning today with India’s most trusted gaming platform!
</p>

<h3 className="popular">Popular Online Gaming Options</h3>

 <a
        href="https://api.whatsapp.com/send?phone=66909885852"
        
        target="_blank"
        rel="noreferrer"
      >
         <button className="cta-btn">
          Whatsapp to get online cricket ID
        </button>
      </a>

<div className="about-sectionOneimages">

<img src={leftImg} alt="cricket player"/>
<img src={rightImg} alt="cricket bowler"/>

</div>

</section>

);

}

export default AboutSectionOne;