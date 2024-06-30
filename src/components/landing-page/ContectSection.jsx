import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const hours = [
  { name: "Monday", hour: "11 AM – 11 PM" },
  { name: "Tuesday", hour: "11 AM – 11 PM" },
  { name: "Wednesday", hour: "11 AM – 11 PM" },
  { name: "Thursday", hour: "11 AM – 11 PM" },
  { name: "Friday", hour: "11 AM – 11 PM" },
  { name: "Saturday", hour: "11 AM – 11 PM" },
  { name: "Sunday", hour: "11 AM – 11 PM" },
];

const sections = [
  {
    title: "Address",
    content: (
      <div className="flex flex-col">
        <label className="my-1 text-center">125 Brock St,</label>
        <label className="my-1 text-center">Kingston</label>
        <label className="my-1 text-center">K7L 1S1</label>
        <button className="py-2 px-6 bg-[#a76435] my-3 font-medium hover:bg-[#a76435]/80">
          Directions
        </button>
      </div>
    ),
  },
  {
    title: "Hours",
    content: (
      <>
        {hours.map((item, index) => (
          <div key={index} className="flex justify-between gap-x-3 py-1 w-full">
            <label className="text-start font-medium">{item.name}</label>
            <label className="text-end font-light">{item.hour}</label>
          </div>
        ))}
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <div className="flex flex-col">
        <a
          href="mailto:info@themercury.ca"
          target="_blank"
          className="underline mt-3 flex gap-x-3 items-center"
        >
          <MdEmail />
          info@themercury.ca
        </a>
        <a
          href="tel:6137667225"
          target="_blank"
          className="underline mt-2 flex gap-x-3 items-center"
        >
          <FaPhoneAlt />
          613 766 7225
        </a>
      </div>
    ),
  },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-around items-center gap-x-6 sm:items-start">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mb-6 sm:mb-0"
            >
              <h1 className="font-semibold text-lg sm:text-2xl mb-4 text-center">
                {section.title}
              </h1>
              <div className="w-full">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
