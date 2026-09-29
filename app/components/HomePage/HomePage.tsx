import Navbar from "../Navbar";
import Banner from "../Banner/Banner";
import MarqueeSection from "./MarqueeSection/MarqueeSection";
import DiscoverSection from "./DiscoverSection/DiscoverSection";
import CategorySkills from "./CategorySkills/CategorySkills";
import CourseCard from "./CourseCard/CourseCard";
import ExplorePath from "./ExplorePath/ExplorePath";
import FeatureSection from "./FeatureSection/FeatureSection";

const HomePage = () => {
  return (
    <div className="bg-brand max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <MarqueeSection></MarqueeSection>
      <DiscoverSection></DiscoverSection>
      <CategorySkills></CategorySkills>
      <div className="bg-white">
        <CourseCard></CourseCard>
      </div>
      <div className="bg-white">
        <ExplorePath></ExplorePath>
      </div>
      <FeatureSection></FeatureSection>
    </div>
  );
};

export default HomePage;
