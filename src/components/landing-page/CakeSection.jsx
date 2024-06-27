import React from "react";

export const CakeSection = () => {
  return (
    <div className="py-20 bg-[#333333] text-white">
      <div className="flex justify-center items-center mb-10">
        <h1 className="font-semibold text-3xl">Happenings</h1>
      </div>
      <div className="py-8 lg:py-16 px-2 w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-10 lg:gap-x-20">
        <img
          src="/M1.jpg"
          alt="cocktail"
          width={570}
          height={400}
          className="object-cover lg:pb-0 h-[600px] pb-8"
        />
        <div className="flex flex-col justify-center items-center lg:w-1/2 lg:pt-0 pt-8 px-4">
          <h2 className="my-5 font-semibold text-2xl">Meet Sangria</h2>
          <p className="w-full lg:w-3/4 text-center">
            In need of a liquid therapy..? A vibrant Spain tapestry woven from
            the essence of fruits and soulful depths of wine. It tells the story
            of our passion and love , promise of shared memories.. join the
            eternal toast to the joy of living..
          </p>
          <a href="#reserve">
            <button className="py-3 px-8 bg-[#a76435] my-7 font-medium">
              reserve
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
