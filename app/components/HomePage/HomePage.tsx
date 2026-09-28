import React from "react";
import Navbar from "../Navbar";
import Banner from "../Banner/Banner";

const HomePage = () => {
  return (
    <div className="bg-brand max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default HomePage;
