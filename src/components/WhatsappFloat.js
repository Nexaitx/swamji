import React from "react";
import whatsapp from "../assets/WhatsApp-Icon.webp";
import "../components/WhatsappFloat.css";
function WhatsappFloat() {
  return (
    <div className="whatsapp-float">
     <a
        href="https://wa.link/haljko"
        className="whatsapp-btn"
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsapp} alt="whatsapp" />
      </a>
    </div>
  );
}

export default WhatsappFloat;