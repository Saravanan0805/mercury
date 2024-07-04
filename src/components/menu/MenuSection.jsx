import React from "react";
import { Link, useLocation } from "react-router-dom";

export const MenuSection = () => {
  const location = useLocation();
  // Access the path from the location object
  const currentPath = location.pathname.substring(1);
  return (
    <div className="py-[60px]">
      <div>
        <div className=" flex justify-center items-center mb-10">
          <h1 className="font-semibold text-3xl">Explore Our Menu</h1>
        </div>
        <div className="flex justify-evenly">
          <Link to={"/menu"}>
            <button
              className={`py-3 px-8 ${
                currentPath === "menu" ? "bg-[#757263]" : "bg-[#a76435]"
              } my-7 font-medium`}
            >
              Food
            </button>
          </Link>
          <Link to={"/drinks-menu"}>
            <button
              className={`py-3 px-8 ${
                currentPath === "drinks-menu" ? "bg-[#757263]" : "bg-[#a76435]"
              } my-7 font-medium`}
            >
              Drinks
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
