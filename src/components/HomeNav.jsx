import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "About", href: "#about", current: true },
  { name: "Menu", href: "/menu", current: false },
  { name: "Contact", href: "#content", current: false },
  { name: "Reserve", href: "#reserve", current: false },
  {
    name: "Gift cards",
    href: "https://www.talech.com/biz/ordering/143524/MERCURY-BAR-LOUNGE-KINGSTON-ON#/gift_cards",
    current: false,
  },
  {
    name: "Order online",
    href: "https://www.talech.com/biz/ordering/143524/MERCURY-BAR-LOUNGE-KINGSTON-ON",
    current: false,
  },
];

const navigation_start = [
  {
    name: "Gift cards",
    href: "https://www.talech.com/biz/ordering/143524/MERCURY-BAR-LOUNGE-KINGSTON-ON#/gift_cards",
    current: false,
  },
  { name: "About", href: "#about", current: true },
  { name: "Menu", href: "/menu", current: false },
];
const navigation_end = [
  { name: "Contact", href: "#content", current: false },
  { name: "Reserve", href: "#reserve", current: false },
  {
    name: "Order online",
    href: "https://www.talech.com/biz/ordering/143524/MERCURY-BAR-LOUNGE-KINGSTON-ON",
    current: false,
  },
];

export default function NaVBar() {
  return (
    <Disclosure as="nav" className="bg-[#333333]">
      {({ open }) => (
        <>
          <div className=" px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 w-full items-center justify-around">
              <div className="relative inset-y-0 left-0 flex justify-end md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative flex w-full items-end justify-end rounded-md p-2 text-gray-400 hover:text-white">
                  <span className="relative" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 font-medium w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6  font-medium w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden md:block">
                <div className="flex lg:gap-x-14 gap-x-5 sm:items-stretch sm:justify-start">
                  {navigation_start.map((item) =>
                    item.href[0] === "#" ? (
                      <a
                        key={item.name}
                        href={`/${item.href}`}
                        className="hover:underline hover:decoration-solid hover:decoration-[1.5px] rounded-md px-3 py-2 text-base font-medium text-white whitespace-nowrap"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="hover:underline hover:decoration-solid hover:decoration-[1.5px] rounded-md px-3 py-2 text-base font-medium text-white whitespace-nowrap"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center flex-1">
                <Link to="/" className="flex items-center">
                  <img
                    src="/Logo_mercury-white_png.png"
                    alt="mercury"
                    className="h-20 w-auto"
                  />
                </Link>
              </div>

              <div className="hidden md:block">
                <div className="flex lg:gap-x-14 gap-x-5 sm:items-stretch sm:justify-start">
                  {navigation_end.map((item) =>
                    item.href[0] === "#" ? (
                      <a
                        key={item.name}
                        href={`/${item.href}`}
                        className="hover:underline hover:decoration-solid hover:decoration-[1.5px] rounded-md px-3 py-2 text-base font-medium text-white whitespace-nowrap"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="hover:underline hover:decoration-solid hover:decoration-[1.5px] rounded-md px-3 py-2 text-base font-medium text-white whitespace-nowrap"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden fixed z-10 top-20 left-0 w-full bg-[#333333] shadow-md transform transition-transform ease-in-out duration-300">
            <div className="space-y-1 px-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href[0] === "#" ? `/${item.href}` : item?.href}
                  className="hover:underline hover:decoration-solid hover:decoration-[1.5px]  rounded-md px-3 py-2 text-sm font-normal text-white block w-full text-center"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
