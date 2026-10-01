import Navbar from "../Navbar";
import Banner from "../Banner/Banner";
import MarqueeSection from "./MarqueeSection/MarqueeSection";
import DiscoverSection from "./DiscoverSection/DiscoverSection";
import CategorySkills from "./CategorySkills/CategorySkills";
import CourseCard from "./CourseCard/CourseCard";
import ExplorePath from "./ExplorePath/ExplorePath";
import FeatureSection from "./FeatureSection/FeatureSection";
import Footer from "../Footer/Footer";
import BecomeCreator from "../BecomeCreator/BecomeCreator";
import CommunityReviews from "../CommunityReviews/CommunityReviews";
import { courses } from "@/lib/data";

const HomePage = () => {
  return (
    <div className="bg-brand max-w-[1440px] mx-auto">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      <Navbar></Navbar>
      <Banner></Banner>
      <MarqueeSection></MarqueeSection>
      <DiscoverSection></DiscoverSection>
      <CategorySkills></CategorySkills>
      <div className="bg-white">
        <CourseCard course={courses[0]}></CourseCard>
      </div>
      <div className="bg-white">
        <ExplorePath></ExplorePath>
      </div>
      <FeatureSection></FeatureSection>
      <BecomeCreator></BecomeCreator>
      <CommunityReviews></CommunityReviews>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
