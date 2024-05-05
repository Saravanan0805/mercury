import React from "react";

export const ContectSection = () => {
  return (
    <div className="bg-[#333333] py-10 sm:py-20 text-white" id="content">
      <div className="flex flex-col sm:flex-row justify-evenly items-center flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-6 sm:mb-0">
          <h1 className="font-semibold text-lg sm:text-2xl mb-1">Address</h1>
          <label className="my-3">125 Brock St</label>
          {/* <button className="py-2 px-6 bg-[#a76435] my-3 font-medium">
            Directions
          </button> */}
        </div>
        <div className="flex flex-col items-center mb-6 sm:mb-0">
          <h1 className="font-semibold text-lg sm:text-2xl mb-0">Hours</h1>
          <label className="my-3">Sunday - Thursday</label>
          <label className="my-3">11am - 11pm</label>
          {/* <label className="my-3">
            {" "}
            Friday & Saturday <br /> 4:30pm - 11pm{" "}
          </label> */}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-lg sm:text-2xl mb-1">Contact</h1>
          {/* <label className="underline my-3">312-492-6262 </label> */}
          <label className="underline my-3">info@themercury.ca</label>
        </div>
      </div>
    </div>
  );
};
