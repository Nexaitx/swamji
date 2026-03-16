import partnerLogo from "../assets/download-webp.webp";
import partnerLogo1 from "../assets/download-webp1.webp";
import partnerLogo2 from "../assets/download-webp2.webp";
import partnerLogo3 from "../assets/download-webp3.webp";
function PartnersSection() {
  return (
   <section className="partners-section">
        <div className="partners-header">
          <h2 className="partners-main-title">Premium Online Gaming ID Provider</h2>
          <p className="partners-intro">
            Join India's elite online gaming sites for incredible odds and secure gaming experiences. If you are a pro bettor or just a beginner, kaalBet Online gaming ID provider will give you the utmost serenity. From us you can get your one stop id where you can bet on all live sports and world's all live casino games. We recommend you must concentrate on making money while we take care of security, cash-out, and everything else, Your Victory is our Concern.
          </p>
        </div>

        <h2 className="partners-title">Trusted kaalBet Online Partners</h2>
        <p className="partners-subtitle">
          We are proud to be working with some of the best online platforms of the gaming industry. Brands which bring you the quality services with amazing odds, and ultimate gaming experiences. Here are some elite online gaming sites provided by us:
        </p>

        <div className="partners-grid1">
          <div className="partner-card">
            <div className="partner-logo">
              <div className="partner-logo-circle"><img src={partnerLogo}alt="partnerLogo" style={{width:"100px"}}/></div>
            </div>
            <h3 className="partner-name">99exch</h3>
            <p className="partner-description">
              99EXCH offers unbeatable exchange rates and a smooth user experience for gaming enthusiasts. It is built on trust and performance, so play freely.
            </p>
            <button className="partner-button">Get ID</button>
          </div>

          <div className="partner-card">
            <div className="partner-logo">
              <div className="partner-logo-circle partner-logo-orange">
                <img src={partnerLogo1}alt="partnerLogo" style={{width:"100px"}}/>
              </div>
            </div>
            <h3 className="partner-name">KaalBet.live</h3>
            <p className="partner-description">
              KaalBet.live secure legal gaming, 24/7 support, and instant cricket IDs for a quick gaming experience. KaalBet Live has the best transaction methods.
            </p>
            <button className="partner-button">Get ID</button>
          </div>

          <div className="partner-card">
            <div className="partner-logo">
              <div className="partner-logo-circle">
                <img src={partnerLogo2}alt="partnerLogo" style={{width:"100px"}}/>
              </div>
            </div>
            <h3 className="partner-name">11xplay.pro</h3>
            <p className="partner-description">
              1X Play is a way to enjoy live sports betting in real time. With top-notch features, 1X Play provides a premium gaming experience and Fast Payment Services.
            </p>
            <button className="partner-button">Get ID</button>
          </div>

          <div className="partner-card">
            <div className="partner-logo">
              <div className="partner-logo-circle">
                <img src={partnerLogo3}alt="partnerLogo" style={{width:"100px"}}/>
              </div>
            </div>
            <h3 className="partner-name">laser247.club</h3>
            <p className="partner-description">
              LASER247 is a fast and reliable online betting platform. This brand is highly recommended if you are looking for a speedy alternative for wagering.
            </p>
            <button className="partner-button">Get ID</button>
          </div>
        </div>
      </section>

  );
}

export default PartnersSection;