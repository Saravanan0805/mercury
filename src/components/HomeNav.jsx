import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "about", href: "#about", current: true },
  { name: "menu", href: "/menu", current: false },
  { name: "contact", href: "#content", current: false },
  { name: "reserve", href: "#reserve", current: false },
];

const navigation_start = [
  { name: "about", href: "#about", current: true },
  { name: "menu", href: "/menu", current: false },
];
const navigation_end = [
  { name: "contact", href: "#content", current: false },
  { name: "reserve", href: "#reserve", current: false },
];

export default function NaVBar() {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      // Enable scrolling when the component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
    <Disclosure as="nav" className="bg-[#333333]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="relative inset-y-0 left-0 flex justify-end sm:hidden">
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
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 items-center justify-evenly sm:items-stretch sm:justify-start lg:w-1/2">
                  {navigation_start.map((item) =>
                    item.href[0] === "#" ? (
                      <a
                        key={item.name}
                        href={`/${item.href}`}
                        className="hover:underline hover:decoration-solid hover:decoration-[1.5px] rounded-md px-3 py-2 text-sm font-medium  text-white"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="hover:underline hover:decoration-solid hover:decoration-[1.5px] rounded-md px-3 py-2 text-sm font-medium  text-white"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>

              <div className="flex items-center text-white text-lg font-semibold justify-center sm:items-stretch">
                <Link to="/"><img src="\Logo_mercury-white_png.png" alt="mercury" width={200} height={200}/>  </Link>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                  <div className="flex space-x-4">
                    {navigation_end.map((item) => (
                      <a
                        key={item.name}
                        href={`/${item.href}`}
                        className="hover:underline hover:decoration-solid hover:decoration-[1.5px] rounded-md px-3 py-2 text-sm font-medium  text-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
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


      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="backdrop-opacity-10 backdrop-invert bg-white/10 backdrop-blur-sm flex border-2 border-black text-white p-8 rounded-3xl">
          <div className="text-4xl font-bold">
            Opening Soon
          </div>
          <div className="flex items-baseline mt-4 pl-3">
            <div className='loader'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
