import Navbar from "../Navbar";
import Banner from "../Banner/Banner";
import MarqueeSection from "./MarqueeSection/MarqueeSection";

const HomePage = () => {
  return (
    <div className="bg-brand max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <MarqueeSection></MarqueeSection>
    </div>
  );
};

export default HomePage;
