import React from "react";
// import CocktailImage from "../../public/Cocktail.webp";
export const CakeSection = () => {
  return (
    <div className=" py-20 bg-[#333333] text-white">
      <div className="flex justify-center items-center mb-10">
        <h1 className="font-semibold text-3xl">happenings</h1>
      </div>
      <div className="py-[60px] w-[80%] m-auto flex gap-x-20">
        <img src="/Cocktail.webp" alt="cocktail" width={570} height={400} className="object-cover" />
        <div className="flex flex-col justify-center items-center">
            <h2 className="my-5 font-semibold text-2xl">meet Spicy Boy</h2>
            <p className="w-3/4">Looking for a new non-alcoholic drink that's anything but boring? Say hello to our Spicy Boy! With a unique blend of tarragon, pomegranate, jalapeño, ginger, and lime, this drink packs a punch of flavor that's sure to delight your taste buds, whether you're looking for booze or not.</p>
        <button className='py-3 px-8 bg-[#a76435] my-7 font-medium'>reserve</button>
        </div>
      </div>
    </div>
  );
};
