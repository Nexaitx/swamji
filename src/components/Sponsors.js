import React from "react";
import gpay from "../assets/gpay.webp";
import phonepe from "../assets/PhonePe1.webp";
import airtel from "../assets/airtel-banking.webp";
import whatsapp from "../assets/whatsappPay.webp";
import bhim from "../assets/bhim.webp";
import bitcoin from "../assets/Rbtuim5BZag.webp";
import bharatpe from "../assets/bhartPe.webp";
import litecoin from "../assets/banking-despoit.webp";
import Phonepe1 from "../assets/Phonepe.webp";
import astropay from "../assets/astropay.webp";
import banktransfer from "../assets/bank_transfer.webp";
import netbanking from "../assets/net-banking.webp";
import visa from "../assets/visa.webp";
// import visa1 from "../assets/visa-1.webp";
import upibank from "../assets/upi-bank.webp";
import upi from "../assets/upi.1.webp";
import paytem from "../assets/paytem.webp";

import cricket from "../assets/cricket-shotPic.webp";

function Sponsors(){

// const logos = [
// gpay,
// phonepe,
// airtel,
// whatsapp,
// bhim,
// bitcoin,
// bharatpe,
// litecoin
// ];

return(

<section className="sponsor-section">

<h1>Our Sponsors</h1>

{/* <div className="sponsor-logos">

{logos.map((logo,index)=>(
<img key={index} src={logo} alt="sponsor"/>
))}

</div> */}
<div className="tools-logos">
          <div className="tools-track">
      <div className="tool-logo"><img  src={gpay} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={phonepe} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={airtel} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={whatsapp} alt="sponsor" style={{height:"90px", marginTop:"-16px"}}/></div>
      <div className="tool-logo"><img  src={bhim} alt="sponsor" style={{height:"90px", marginTop:"-17px"}}/></div>
      <div className="tool-logo"><img  src={bitcoin} alt="sponsor" style={{height:"90px", marginTop:"-16px"}}/></div>
      <div className="tool-logo"><img  src={bharatpe} alt="sponsor" style={{height:"90px", marginTop:"-17px"}}/></div>
      <div className="tool-logo"><img  src={litecoin} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={Phonepe1} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={astropay} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={banktransfer} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={netbanking} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={visa} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={upibank} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={upi} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={paytem} alt="sponsor"/></div>


      {/* duplicate for seamless loop */}
       <div className="tool-logo"><img  src={gpay} alt="sponsor"/></div>
      <div className="tool-logo"><img src={phonepe} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={airtel} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={whatsapp} alt="sponsor"style={{height:"90px", marginTop:"-16px"}}/></div>
      <div className="tool-logo"><img  src={bhim} alt="sponsor" style={{height:"90px", marginTop:"-17px"}}/></div>
      <div className="tool-logo"><img  src={bitcoin} alt="sponsor" style={{height:"90px", marginTop:"-16px"}}/></div>
      <div className="tool-logo"><img  src={bharatpe} alt="sponsor" style={{height:"90px", marginTop:"-17px"}}/></div>
      <div className="tool-logo"><img  src={litecoin} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={Phonepe1} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={astropay} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={banktransfer} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={netbanking} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={visa} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={upibank} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={upi} alt="sponsor"/></div>
      <div className="tool-logo"><img  src={paytem} alt="sponsor"/></div>
    </div>
        </div>
        <div>
            <img src={cricket} alt="cricket player" className="cricket-img"/>

<div className="white-shape"></div>
        </div>



</section>

);

}

export default Sponsors;