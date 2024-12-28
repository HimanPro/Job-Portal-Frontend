import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogout } from '../Store/UserSlice'

import img from './logo.png'
import { useState } from 'react'

const navigation = [
  { name: 'Dashboard', to: '#', current: true },
  { name: 'Team', to: '#', current: false },
  { name: 'Projects', to: '#', current: false },
  { name: 'Calendar', to: '#', current: false },
]

function classNames(...classes) {


  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [arr, setarr] = useState([
    { name: "Home", to: "/", current: true },
    // { name: "Job Listings", to: "/jobs", current: false },
    // { name: "Employers", to: "/employers", current: false },
    // { name: "Candidates", to: "/candidates", current: false },
    // { name: "Contact", to: "/contact", current: false },
  ]);
 
  

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const HandelLogout = () => {
    dispatch(userLogout())
    navigate('/landing')
  }
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="pt[10px] shrink-0 ">
              <img
                alt="Job Portal"
                src={img}  // Update this with your logo URL
                className="h-[80px] w-[190px] pt-[10px]"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center h-[100px]">
                {arr.map((item, i) => {
                 return <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
})}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="User Profile"
                    src="https://via.placeholder.com/40" // Replace with dynamic user profile URL
                    className="size-8 rounded-full"
                  />
                </Menu.Button>
              </div>
              <Menu.Items
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
              >
                <Menu.Item>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <button
                    onClick={HandelLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden z-999">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {[
            { name: "Home", to: "/", current: true },
            { name: "Job Listings", to: "/jobs", current: false },
            { name: "Employers", to: "/employers", current: false },
            { name: "Candidates", to: "/candidates", current: false },
            { name: "Contact", to: "/contact", current: false },
          ].map((item) => (
            <Disclosure.Button
              key={item.name}
              as="Link"
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>

  )
}
