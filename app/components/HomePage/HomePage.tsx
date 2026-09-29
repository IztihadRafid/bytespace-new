import Navbar from "../Navbar";
import Banner from "../Banner/Banner";
import MarqueeSection from "./MarqueeSection/MarqueeSection";
import DiscoverSection from "./DiscoverSection/DiscoverSection";
import CategorySkills from "./CategorySkills/CategorySkills";

const HomePage = () => {
  return (
    <div className="bg-brand max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <MarqueeSection></MarqueeSection>
      <DiscoverSection></DiscoverSection>
      <CategorySkills></CategorySkills>
    </div>
  );
};

export default HomePage;
