import React from "react";
import NaVBar from "../components/HomeNav";
import "../../src/styles.css";
import HeroCarousel from "./HeroCarousel";
import { Footer } from "../components/HomeFooter";
import { CakeSection } from "../components/landing-page/CakeSection";
import { AboutSection } from "../components/landing-page/AboutSection";
import { ReservationSection } from "../components/landing-page/ReservationSection";
import { ContectSection } from "../components/landing-page/ContectSection";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="background-image"></div>
      <div className="content">
        <NaVBar />
        <HeroCarousel />
        <ContectSection />
        <div className="h-[630px]"></div>
        <AboutSection />
        <ReservationSection />
        <CakeSection />
        {/* <HardSection /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
