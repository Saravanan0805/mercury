import React, { useEffect } from "react";
const hours = [
  { name: "Monday", hour: "	11 AM – 11 PM" },
  { name: "Tuesday", hour: "	11 AM – 11 PM" },
  { name: "Wednesday", hour: "	11 AM – 11 PM" },
  { name: "Thursday", hour: "	11 AM – 11 PM" },
  { name: "Friday", hour: "	11 AM – 11 PM" },
  { name: "Saturday", hour: "	11 AM – 11 PM" },
  { name: "Sunday", hour: "	11 AM – 11 PM" },
];

export const ContectSection = () => {
  useEffect(() => {
    // Check if the URL has a hash and navigate to the corresponding section
    const hash = window.location.hash;
    if (hash === "#content") {
      const contectSection = document.getElementById("content");
      if (contectSection) {
        contectSection.scrollIntoView();
      }
    }
  }, []);

  return (
    <div className="bg-[#333333] py-10 sm:py-20 text-white" id="content">
      <div className="flex flex-col sm:flex-row justify-evenly items-center flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-6 sm:mb-0">
          <h1 className="font-semibold text-lg sm:text-2xl mb-0">Address</h1>
          <label className="my-1">125 Brock St,</label>
          <label className="my-1">Kingston</label>
          <label className="my-1">K7L 1S1</label>
        </div>
        <div className="flex flex-col items-center mb-6 sm:mb-0">
          <h1 className="font-semibold text-lg sm:text-2xl mb-0">Hours</h1>
          {hours?.map((items, index) => (
            <div
              key={index}
              className="flex justify-between gap-x-3 py-1 w-full"
            >
              <label className="text-start font-medium">{items?.name}</label>
              <label className="text-end font-light">{items?.hour}</label>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-lg sm:text-2xl mb-1">Contact</h1>
          <a href="mailto:info@themercury.ca" target="_blank" className="underline mt-3">
            info@themercury.ca
          </a>
          <a href="tel:6137667225" target="_blank" className="underline mt-2">
            Ph - 613 766 7225
          </a>
        </div>
      </div>
    </div>
  );
};
