import React from "react";

export const BannerContainer = () => {
  return (
    <div className="h[550px] bg-[#333333] text-white py-20 flex justify-center flex-col items-center mb-28">
      <div className="mt-5 mb-[10px]">
        <h1 className="font-semibold text-3xl">menu</h1>
      </div>
      <div className="mt-[50px] relative w-full ">
        <div className=" relative left-[18%]">
          <img
            src="/M3.jpg"
            alt="left_banner_image"
            width={540}
            height={360}
            className="responsive-img h-[360px] object-cover"
          />
        </div>
        <div className="absolute top-[17%] right-[26%] flex justify-center items-center">
          <img
            src="/Banner2.webp"
            alt="right_banner_image"
            width={360}
            height={240}
            className="responsive-img"
          />
        </div>
      </div>
    </div>
  );
};
