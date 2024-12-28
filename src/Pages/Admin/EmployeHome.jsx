import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react'
import logo from '../../Components/logo.png';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../Store/UserSlice';


const EmployeHome = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const HandelLogout = () => {
    dispatch(userLogout())
    navigate('/landing')
  }
  return (
    <>

      <div className="flex flex-no-wrap bg-black ">
        <div className="w-60 relative bg-black border-r-2 shadow max-h-full flex-col justify-between flex">
          <div className="">
            <Menu as="div" className="relative  mt-8 flex justify-center mb-8 transition-all,1">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="User Profile"
                    src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg?t=st=1734436877~exp=1734440477~hmac=4831949b7da36af8aedc4a694053dc2af9c91827a24139b350fb08ef7a3a397f&w=900" // Replace with dynamic user profile URL
                    className="size-10 rounded-full"
                  />
                </Menu.Button>
              </div>
              <Menu.Items className="relative flex mx-4 gap-3 origin-top-right ">
                <Menu.Item>
                  <button
                    to="/profile"
                    className=" block  py-2 text-sm text-white hover:bg-red"
                  >
                    Profile
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    onClick={HandelLogout}
                    className="block  py-2 text-sm text-white hover:bg-black shrink-0"
                  >
                    Sign out
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <ul className="mt-4 mx-6">
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
                <Link to="/empHome" className="flex items-center focus:outline-none focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={4} width={6} height={6} rx={1} />
                    <rect x={14} y={4} width={6} height={6} rx={1} />
                    <rect x={4} y={14} width={6} height={6} rx={1} />
                    <rect x={14} y={14} width={6} height={6} rx={1} />
                  </svg>
                  <span className="text-sm ml-2">Dashboard</span>
                </Link>
              </li>
              <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                <Link to="/empHome/createJob" className="flex items-center focus:outline-none focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                  </svg>
                  <span className="text-sm ml-2">Post A Job</span>
                </Link>
              </li>
              <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                <Link to="/empHome/showJob" className="flex items-center focus:outline-none focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                    <circle cx={12} cy={12} r={9} />
                  </svg>
                  <span className="text-sm ml-2 shrink-0">Show all job</span>
                </Link>
              </li>
              <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                <Link to="#" className="flex items-center focus:outline-none focus:ring-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                    <circle cx={12} cy={12} r={9} />
                  </svg>
                  <span className="text-sm ml-2 shrink-0">Applied User</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Sidebar ends */}
        <div className="container h-full w-full px-5 py-5 ">
          {/* Place your content here */}
          



          <div className="bg-black text-white overflow-hidden font-plusJakartaSans ">
            <div className="flex flex-col-reverse gap-10 items-center lg:flex-row lg:h-screen lg:p-5">
              <div className="flex flex-col gap-[25px]">
                <div className={`font-cabin text-[40px] font-[900]`}>
                  <p>
                    So Many People are{" "}
                    <span className="bg-PrimaryGradient bg-clip-text text-transparent">
                      Engaged
                    </span>
                    <br />
                    All over the world
                  </p>
                </div>

                <div>
                  <p className="text-lg text-[#D8D8D8] font-normal">
                    Et in sapien enim congue interdum pulvinar non sed. <br /> Ac
                    augue netus tellus semper.
                  </p>
                </div>

                <div>
                  <Link to={'/empHome/createJob'}>
                    <button className="bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] text-white font-semibold hover:opacity-90 transition-opacity duration-300 rounded-[5px] h-[60px] py-2 px-5  ">
                      Post A Job
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="/assets/images/Bottom_hero_image.svg"
                  alt="icon group image"
                  className="w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default EmployeHome;



