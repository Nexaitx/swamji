import React from "react";
import bg from "../assets/important_img-scaled.webp";

function TrustedPartners() {

  const partners = [
    "Online Cricket Gaming ID",
    "Casino Gaming ID",
    "Cricket Master ID",
    "IPL Betting ID",
    "Online Betting ID"
  ];

  return (
    <section
      className="partners-section"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div >

        <h1>Our Out Trusted Partners in India</h1>

        <div className="partners-grid">

          {partners.map((item,index)=>(
            <div className="partner-cardstext" key={index}>

              <div className="circle">
                {item}
              </div>
               <a
        href="https://wa.link/haljko"
        
        target="_blank"
        rel="noreferrer"
      >
              <button className="get-btn">
                Get ID
              </button>
            </a>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TrustedPartners;
