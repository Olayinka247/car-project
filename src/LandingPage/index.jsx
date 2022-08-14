import React, { useState } from "react";
import FirstSection from "../component/FirstSection";
import Footer from "../component/Footer";
import InfoSection from "../component/infoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../component/infoSection/Data";
import Navbar from "../component/Navbar";
import Services from "../component/Services";
import Sidebar from "../component/Sidebar";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FirstSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </div>
  );
};

export default LandingPage;
