import { FaInstagram } from "react-icons/fa";
import { LiaFacebookSquare } from "react-icons/lia";

export const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white pt-[60px] pb-[10px]">
      <div className="w-full">
        <div>
          <div className="pb-[60px] flex justify-center items-center font-semibold text-3xl">
            <h1 className="">
            Bring Chef Stephanie Izard&apos;s bold, restaurant flavors home
            with&nbsp;
            <u>This Little Goat</u>!
            </h1>
          </div>
          <div className="pb-10">

          <div className="w-3/4 m-auto">
          <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:gap-x-20">

              <div className="py-[10px] font-semibold text-2xl">Mercury</div>
              <div className="flex justify-center gap-x-5 w-full font-medium sm:flex-wrap">
                <p>website accessibility</p>
                <p>site map</p>
                <p>join our team</p>
                <p>press inquiries</p>
                <p>email newsletter</p>
              </div>
              <div className="flex items-center font-light">
                <LiaFacebookSquare className="h-10 w-10" />
                <FaInstagram className="h-[33px] w-[33px]" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p>
            Visit our sister restaurants&nbsp; <u>Cabra</u>,&nbsp; <u>Duck Duck Goat</u>, and&nbsp; <u>Little Goat Diner</u>     
            </p>
          </div>
          </div>
        </div>
      </div>
        <p className="flex justify-center items-center text-sm"> © 2023 <u>Boka Restaurant Group</u>, LLC. All Rights Reserved</p>
    </footer>
  );
};
