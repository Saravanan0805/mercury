import React from "react";

export const AboutSection = () => {
  return (
    <div className="bg-[#333333] text-white py-20">
      <div className="grid grid-cols-2 w-[65%] m-auto gap-10">
        <div className="flex gap-5">
          <img src="/Chicago1.webp" alt="about_img" width={232} height={320} className="object-cover" />
          <img src="/Chicago2.webp" alt="about_img" width={232} height={320} className="object-cover" />
        </div>
        <div className="text-center ml-5">
          <h1 className="mt-5 mb-[10px]">MERCURY CHICAGO</h1>
          <p className="mt-5 mb-[10px]">
            As one of the first restaurants on Chicago&apos;s famed Restaurant
            Row in the West Loop, Stephanie Izard&apos;s mercury in 2010 with a
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
