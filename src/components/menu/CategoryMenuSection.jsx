import React from "react";
import { CategoryContent } from "./CategoryContent";
import {
  beerContent,
  breadContent,
  ciderContent,
  cocktail,
  dessertContent,
  fishContent,
  goatContent,
  meatContent,
  spiritContent,
  veggiesContent,
  winesContent,
} from "./MenuContent";

export const CategoryMenuSection = ({ title }) => {
  return (
    <div className="w-3/4 m-auto pb-[60px]">
      <h1 className="p-[30px] font-semibold">{title}</h1>
      {title === "Drinks" ? (
        <>
          <CategoryContent title="COCKTAILS" content={cocktail} />
          <CategoryContent title="BEER" content={beerContent} />
          <CategoryContent title="CIDER" content={ciderContent} />
          <div>
            <h1 className="flex justify-center font-semibold text-xl py-5">
              WINES BY THE GLASS
            </h1>
            <div className="p-[30px] flex flex-wrap">
              {winesContent?.map((c, index) => (
                <div key={index} className="w-1/2 pr-10 mb-[30px]">
                  <div className="border-b pb-5">
                    <div className="font-semibold text-sm">
                      <label>{c?.name}</label>
                    </div>
                    <p className="mt-10 text-xs">{c?.message}</p>
                    <div className="text-xs pt-5 font-semibold">
                      <div className="flex justify-between">
                        <label>glass</label>
                        <label>{c?.glass}</label>
                      </div>
                      <div className="flex justify-between">
                        <label>bottle</label>
                        <label>{c?.bottle}</label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CategoryContent title="SPIRIT FREE" content={spiritContent} />
        </>
      ) : (
        <>
          <CategoryContent title="Green Galore" content={breadContent} />
          <CategoryContent title="Soul-Warming" content={veggiesContent} />
          <CategoryContent title="Social Plate" content={fishContent} />
          <CategoryContent title="Handheld Delights" content={meatContent} />
          <CategoryContent title="Main Attraction" content={goatContent} />
          <CategoryContent title="Tempting Treats" content={dessertContent} />
        </>
      )}
      {/* <div className="mb-16">
        <h1 className="flex justify-center items-center mb-10 font-bold">
          SURCHARGE
        </h1>
        <p className="text-xs">
          As a way to offset rising costs associated with the restaurant (food,
          beverage, labor, benefits, supplies), we have added a 3% surcharge to
          all checks. We do this in lieu of increased menu prices. You may
          request to have this taken off your check, should you choose.
        </p>
      </div> */}
    </div>
  );
};
