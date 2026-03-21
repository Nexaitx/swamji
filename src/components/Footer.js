import React from "react";
import logo from "../assets/kaalbet logolatest.png";
import upi from "../assets/upi-bank.webp";
import bank from "../assets/bank_transfer.webp";
import visa from "../assets/visa.webp";
import netbank from "../assets/net-banking.webp";
import { FaEnvelope, FaGlobe, FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer(){

return(

<footer className="footer">

<div className="footer-grid">

<div>

<img src={logo} alt="logo" className="footer-logo"/>

<p>
KaalBet private Ltd operates an online gaming exchange
platform. The Company allows users to bet in sports,
football, and horse racing, as well as play online casino,
poker, and arcade games. KaalBet serves customers worldwide.
</p>

</div>

<div>

<h3>Home</h3>

<ul>
<li>About Us</li>
<li>How It Works</li>
<li>Why KaalBet</li>
<li>Blogs</li>
<li>News</li>
<li>Contact Us</li>
</ul>

</div>

<div>

<h3>FAQ</h3>

<ul>
<li>Privacy Policy</li>
<li>Terms & Condition</li>
<li>Legal Situations</li>
<li>Customer Care</li>
</ul>

</div>

<div>

<h3>Cricket Sports ID</h3>

<ul>
<li>Online Cricket Gaming ID</li>
<li>Casino Gaming ID</li>
<li>Cricket Master ID</li>
<li>IPL Gaming ID</li>
<li>Online Gaming ID</li>
<li>Online Cricket ID Guide</li>
</ul>

</div>

<div>

<h3>Contact Us</h3>

<p><FaEnvelope style={{color:"#ffb347", marginRight:"8px"}}/>support@KaalBetclub.com</p>
<p><FaGlobe style={{color:"#ffb347", marginRight:"8px"}}/>KaalBet.club</p>
<div style={{display:"flex", gap:"12px", margin:"15px 0"}}>

<div className="social-icon">
     <a
        href="https://www.facebook.com/Kaalbet2/"
        
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF/>
      </a>

</div>

<div className="social-icon">
      <a
        href="https://wa.link/haljko"
        
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp/>
      </a>

</div>

<div className="social-icon">
      <a
        href="https://www.youtube.com/@Kaalbet"
        
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube/>
      </a>

</div>

<div className="social-icon">
      <a
        href="https://www.instagram.com/kaalbet02/"
        
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram/>
      </a>

</div>
<div className="social-icon">
  <a
    href="https://x.com/kaalbet"
    target="_blank"
    rel="noreferrer"
  >
    <FaXTwitter />
  </a>
</div>

</div>

<h4>Payment Methods</h4>

<div className="payments">

<img src={upi} alt="upi"/>
<img src={bank} alt="bank"/>
<img src={visa} alt="visa"/>
<img src={netbank} alt="netbank"/>

</div>

</div>

</div>

<div className="disclaimer">

<p>
Disclaimer: Gambling involves financial risk and may lead
to addiction if not done responsibly. Services are strictly
for individuals aged 18 and above.
</p>

<p>
For any assistance or queries, feel free to
<strong> contact the KaalBet team.</strong>
</p>

</div>

</footer>

);

}

export default Footer;