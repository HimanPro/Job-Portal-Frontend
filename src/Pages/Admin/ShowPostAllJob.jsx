import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../Store/UserSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button, Modal } from 'antd';
import EditJob from './EditJob';


const ShowPostAllJob = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [SelectedJob, setSelectedJob] = useState("");
    const [allJob, setallJob] = useState([]);
  


  const storeData = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const HandelLogout = () => {
    dispatch(userLogout())
    navigate('/landing')
  }

  const showJob = async () => {
    let token = storeData.token
    let res = await axios.get('http://localhost:8090/job/getOwnJob', {
      headers: {
        'Authorization': token
      }
    })
    setallJob(res.data.job)
  }
  let date = new Date(SelectedJob.lastDate).toLocaleDateString('en-IN', {weekday:'long', year:'numeric', month:'long', day:'numeric'})
console.log(date);
  useEffect(() => {
    showJob()
  }, [])

  const HandelDelete = async (_id) => {
    let token = storeData.token
    let res = await axios.delete(`http://localhost:8090/job/delete/${_id}`, {
      headers: {
        'Authorization': token
      }
    })
    if (res.data.success) {
      showJob()
      toast.success(res.data.msg, { position: 'top-right' })
    }
  }
 
  const HandelEdit = (job) => {
    setSelectedJob(job)
    
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <>

      <div className="flex flex-no-wrap bg-black h-full ">
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
                <Link to="" className="flex items-center focus:outline-none focus:ring-white">
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
        <div className="container text-sm h-full w-full px-5 py-5 flex flex-wrap  gap-5">
          {/* Place your content here */}
          {allJob.length <= 0 && <div className=' h-screen'>

          </div>}

          {allJob.map((job) => {

            return <div className="bg-gray-400 shadow-md flex flex-col justify-between rounded-lg overflow-hidden max-w-[300px] min-w-[250px] mx-auto">
              {/* Job Image */}
              {job.image && (
                <img
                  src={job.image}
                  alt=''
                  className="w-full h-40 object-contain"
                />
              )}

              {/* Job Details */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
                <p className="text-white mt-2">{job.description}</p>

                <div className="mt-4 text-purple-950">
                  <p>
                    <span className="font-semibold">Company: </span>
                    {job.company}
                  </p>
                  <p>
                    <span className="font-semibold">Work Mode: </span>
                    {job.workMode}
                  </p>
                  <p>
                    <span className="font-semibold">Salary: </span>
                    {job.salary}
                  </p>
                  <p>
                    <span className="font-semibold">Job Role: </span>
                    {job.jobRole}
                  </p>
                  <p>
                    <span className="font-semibold">Job Type: </span>
                    {job.jobType}
                  </p>
                  <p>
                    <span className="font-semibold">Location: </span>
                    {job.location}
                  </p>
                  
                </div>
                

                {/* Requirements */}
                {job.requirements.length > 0 && (
                  <div className="mt-4 text-red-950">
                    <h3 className="font-semibold">Requirements:</h3>
                    <ul className="list-disc list-inside text-red-950">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills */}
                {job.skills.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Skills:</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {job.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className='p-4'>
                <p className='text-yellow-900'>
                    <span className="font-semibold">Last Date: </span>
                    {new Date(job.lastDate).toLocaleDateString('en-IN', {weekday:'long', year:'numeric', month:'long', day:'numeric'})}
                  </p>
                </div>

              {/* Action Buttons */}
              <div className="flex justify-between p-4 border-t border-gray-200">

                <button
                  onClick={() => HandelEdit(job)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Edit
                </button>
             
                <button
                  onClick={() => HandelDelete(job._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>

              </div>
            </div>

          })}


        </div>

        <Modal
                  loading={loading}
                  open={open}
                  onCancel={() => setOpen(false)}
                  className='top-2'
                  okButtonProps={{style: {display: 'none'}}}
                  cancelButtonProps={{style: {display: 'none'}}}
                  title= 'Edit posted job'
                  
                >
                  <EditJob Data={SelectedJob} render= {showJob} modal={setOpen}/>
                </Modal>
      </div>

    </>
  );
}

export default ShowPostAllJob;



