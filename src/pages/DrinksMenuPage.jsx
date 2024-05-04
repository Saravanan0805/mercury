import React from "react";
import NaVBar from "../components/HomeNav";
import { BannerContainer } from "../components/menu/BannerContainer";
import { MenuSection } from "../components/menu/MenuSection";
import { ReservationSection } from "../components/landing-page/ReservationSection";
import { Footer } from "../components/HomeFooter";
import { CategoryMenuSection } from "../components/menu/CategoryMenuSection";

const DrinksMenuPage = () => {
   
  return (
    <div className="content bg-[#333333] text-white">
      <NaVBar />
      <BannerContainer />
      <MenuSection />
      <CategoryMenuSection title="Drinks" />
      <ReservationSection />
      <Footer />
    </div>
  );
};

export default DrinksMenuPage;
