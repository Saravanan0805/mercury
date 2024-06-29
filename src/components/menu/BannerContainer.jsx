import React from "react";

export const BannerContainer = () => {
  return (
    <div className="h[550px] bg-[#333333] text-white py-20 flex justify-center flex-col items-center mb-28">
      <div className="mt-5 mb-[10px] transform translate-x-[-30%]">
        <h1 className="font-semibold text-3xl">MENU</h1>
      </div>
      <div className="mt-[50px] relative w-full flex justify-center items-center">
        <div className="relative flex-shrink-0 transform translate-x-[-10%]">
          <img
            src="/M3.jpg"
            alt="left_banner_image"
            className="lg:h-[360px] md:h-[250px] h-[120px] md:w-auto w-[200px] object-cover"
          />
        </div>
        <div className="absolute top-[50%] transform translate-x-[90%]  translate-y-[-50%] flex-shrink-0">
          <img
            src="/menuImage.jpg"
            alt="right_banner_image"
            className="lg:h-[240px] md:h-[150px] h-[70px] w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};
