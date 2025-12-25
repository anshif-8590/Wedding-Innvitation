import Hero from "../components/Hero";
import Invitation from "../components/Invitation";
import InfoCards from "../components/InfoCards";
import VideoSection from "../components/VideoSection";
import Blessings from "../components/Blessings";
import Footer from "../components/Footer";

const MainPages = () => {
  return (
    <div className="bg-transparent">
      <Hero />
      <Invitation />
      <InfoCards />
      <VideoSection />
      <Blessings />
      <Footer />
    </div>
  );
};

export default MainPages;
