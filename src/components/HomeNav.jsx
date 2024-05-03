import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'about', href: '#', current: true },
  { name: 'menu', href: '#', current: false },
  { name: 'contact', href: '#', current: false },
  { name: 'reserve', href: '#', current: false },
]


const navigation_start = [
    { name: 'about', href: '#', current: true },
    { name: 'menu', href: '#', current: false },
  ]
const navigation_end = [
      { name: 'contact', href: '#', current: false },
      { name: 'reserve', href: '#', current: false },
  ]
  
export default function NaVBar() {
  return (
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
                    <XMarkIcon className="block h-6 font-medium w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6  font-medium w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center justify-evenly sm:items-stretch sm:justify-start lg:w-1/2">
                    {navigation_start.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="hover:underline hover:decoration-solid hover:decoration-[1.5px] rounded-md px-3 py-2 text-sm font-medium capitalize text-white"
                        // aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
              </div>

              <div className="flex items-center text-white text-lg font-semibold justify-center sm:items-stretch">
                Mercury
              </div>

              <div className="hidden sm:ml-6 sm:block">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              <div className="flex space-x-4">
                    {navigation_end.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="hover:underline hover:decoration-solid hover:decoration-[1.5px] rounded-md px-3 py-2 text-sm font-medium capitalize text-white"
                        // aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
              </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="hover:underline hover:decoration-solid hover:decoration-[1.5px] capitalize rounded-md px-3 py-2 text-sm font-normal text-white"
                //   aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


