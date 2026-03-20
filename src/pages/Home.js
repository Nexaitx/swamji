import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
// import PartnersSection from "../components/PartnersSection";
import BettingSection from "../components/BettingSection";
import MatchesSection from "../components/MatchesSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import WhatsappFloat from "../components/WhatsappFloat";
import SportsSection from "../components/SportsSection";
import StepsSection from "../components/StepsSection";
import CreateIdSection from "../components/CreateIdSection";
import WithdrawSection from "../components/WithdrawSection";
import WhyChoose from "../components/WhyChoose";
import CasinoSection from "../components/CasinoSection";
import TrustedPartners from "../components/TrustedPartners";
import GameTypes from "../components/GameTypes";
// import CelebritySection from "../components/CelebritySection";
import ReviewsSection from "../components/ReviewsSection";
import StrategySection from "../components/StrategySection";
import AboutSectionOne from "../components/AboutSectionOne";
import Sponsors from "../components/Sponsors";
// import LatestNews from "../components/LatestNews";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      {/* <PartnersSection /> */}
      <BettingSection />
      <MatchesSection />
      <AboutSection />
      <FeaturesSection />
       <SportsSection />
       <StepsSection />
       <CreateIdSection />
       <WithdrawSection />
        <WhyChoose />
        <CasinoSection />
         <TrustedPartners />
      <GameTypes />
       {/* <CelebritySection /> */}
       <ReviewsSection />
       <StrategySection />
       <AboutSectionOne/>
       <Sponsors/>
       {/* <LatestNews/> */}
       <FAQSection/>
       <Footer/>
      <WhatsappFloat />
       
    </div>
  );
}

export default Home;