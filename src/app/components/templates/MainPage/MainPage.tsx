"use client";
import Begin from "../../../components/modules/MainPage/Begin";
import TrustedBy from "../../../components/modules/MainPage/TrustedBy";
import FeaturedWorks from "../../../components/modules/MainPage/FeaturedWorks";
import WhatWeDo from "../../../components/modules/MainPage/WhatWeDo";
import Testimonials from "../../../components/modules/MainPage/Testimonials";
import Magnetize from "../../../components/modules/MainPage/Magnetize";

const MainPage = () => {
  return (
    <div className="main">
      <Begin />
      <TrustedBy />
      <FeaturedWorks />
      <WhatWeDo />
      <Testimonials />
      <Magnetize />
    </div>
  );
};

export default MainPage;
