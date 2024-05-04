import React from "react";

export const AboutSection = () => {
  return (
    <div className="bg-[#333333] text-white py-20" id="about">
      <div className="grid grid-cols-1  md:grid-cols-2 w-full max-w-screen-lg mx-auto gap-10">
        <div className="flex gap-5 px-1 md:justify-center">
          <img src="/Chicago1.webp" alt="about_img" width={232} height={320} className="object-cover" />
          <img src="/Chicago2.webp" alt="about_img" width={232} height={320} className="object-cover" />
        </div>
        <div className="text-center md:text-left px-4">
          <h1 className="mt-5 mb-5 md:mb-10 md:text-center">MERCURY CHICAGO</h1>
          <p className="mt-5 mb-5 md:mb-10">
            As one of the first restaurants on Chicago's famed Restaurant
            Row in the West Loop, Stephanie Izard's mercury in 2010 with a
            goal of serving bold, global flavors to our local community (and
            visitors!). Since then, our desire to treat guests like family has
            remained the same (as have our Green Beans) – but our seasonal
            flavors, cocktails, wine and locally-rooted beer are ever-changing.
          </p>
        </div>
      </div>
    </div>
  );
};
