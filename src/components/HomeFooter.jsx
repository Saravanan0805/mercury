import { FaInstagram } from "react-icons/fa";
import { LiaFacebookSquare } from "react-icons/lia";

export const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white pt-16 pb-6 md:pt-24 md:pb-10">
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pb-2 md:pb-3 flex flex-col items-center justify-center text-center">
          <h1 className="pb-6 md:pb-12 text-lg md:text-xl lg:text-2xl font-semibold">
            Embark on a culinary adventure with Chef Paulson, celebrating
            diverse flavors at <u>Mercury in Kingston</u>!
          </h1>
          <div className="flex flex-col md:flex-row md:flex-warp justify-center items-center gap-6 md:gap-x-20">
            {/* <div className="text-base md:text-lg font-semibold">Mercury</div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-x-10">
              <p className="py-1 md:py-0">Website Accessibility</p>
              <p className="py-1 md:py-0">Site Map</p>
              <p className="py-1 md:py-0">Join Our Team</p>
              <p className="py-1 md:py-0">Press Inquiries</p>
              <p className="py-1 md:py-0">Email Newsletter</p>
            </div> */}
            {/* <div className="flex justify-center items-center">
              <LiaFacebookSquare className="h-8 w-8 mr-4 md:h-10 md:w-10" />
              <FaInstagram className="h-8 w-8 md:h-9 md:w-9" />
            </div> */}
          </div>

          {/* <p className="text-xs md:text-sm pt-2">
            Visit our sister restaurants <u>Cabra</u>, <u>Duck Duck Goat</u>,
            and <u>Little Goat Diner</u>
          </p> */}
        </div>
      </div>
      <div className="bg-[#333333] text-white py-8 md:pt-3 md:pb-1">
        <div className="flex items-center justify-center text-center">
          <p className="text-xs md:text-sm">
            © 2024 <u>Mercury Restaurant</u>, LLC. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
