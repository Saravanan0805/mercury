import React, { useEffect } from "react";

export const AboutSection = () => {
  useEffect(() => {
    // Check if the URL has a hash and navigate to the corresponding section
    const hash = window.location.hash;
    if (hash === "#about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView();
      }
    }
  }, []);

  return (
    <div className="bg-[#333333] text-white py-20" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-lg mx-auto gap-10">
        <div className="flex gap-5 px-1 flex-col md:justify-center sm:flex-row">
          <div className="w-full sm:w-auto">
            <img
              src="/M2.jpg"
              alt="about_img"
              className="object-cover w-full"
            />
          </div>
          <div className="w-full sm:w-auto hidden md:block">
            <img src="/M4.jpg" alt="about_img" className="object-cover" />
          </div>
        </div>
        <div className="text-center md:text-left px-4">
          <h1 className="mt-5 mb-5 md:mb-10 md:text-center font-bold">
            MERCURY KINGSTON
          </h1>
          <p className="mt-5 mb-5 md:mb-10 text-center">
            At Mercury, our culinary ethos is all about pushing boundaries and
            exploring new horizons. Our menu is a vibrant fusion of western
            culinary traditions and Asian influences, meticulously crafted to
            ignite your taste buds and take you on a culinary journey like no
            other. Each dish at Mercury embodies the spirit of innovation and
            adventure. Prepare to embark on a gastronomic exploration where
            every bite is a delight and every meal is an unforgettable
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};
