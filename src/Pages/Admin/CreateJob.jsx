import React, { useState } from "react";
import axios from 'axios'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react'
import { useDispatch } from 'react-redux';
import { userLogout } from '../../Store/UserSlice';
import { toast } from "react-toastify";
const CreateJob = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let storeData = useSelector((state) => state.user)
 
  const HandelLogout = () => {
    dispatch(userLogout())
    navigate('/landing')
    console.log("object");
  }


  const [formData, setFormData] = useState({
    title: "",
    description: "",
    company: "",
    userId: "",
    salary: "",
    location:"",
    image: "",
    jobRole: "",
    workMode:"",
    jobType:"",
    requirements: [""],
    skills: [""],
    lastDate: "",
  });
  console.log(formData);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, key, index) => {
    const newArray = [...formData[key]];
    newArray[index] = e.target.value;
    setFormData({ ...formData, [key]: newArray });
  };

  const addField = (key) => {
    setFormData({ ...formData, [key]: [...formData[key], ""] });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    console.log(storeData);
    let res = await axios.post(`http://localhost:8090/job/create`, formData, {
      headers:{
        'Authorization':storeData.token
      }
    }
  )
  if(res.data.success){
    setFormData({
      title: "",
      description: "",
      company: "",
      userId: "",
      salary: "",
      location:"",
      image: "",
      jobRole: "",
      workMode:"",
      jobType:"",
      requirements: [""],
      skills: [""],
      lastDate: "",
    })
    toast.success(res.data.msg, {position:'top-right'})
  }
  else{
    toast.error(res.data.msg, {position:'top-right'})

  }


  };
  const [image, setimage] = useState("");
  const handleImageChange = (e) => {
    let file = e.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormData({ ...formData, image:reader.result })
      setimage(reader.result)
    }
    reader.onerror = () => {
      console.log(reader.error);
    }
  }
  return (
    <div className="flex flex-no-wrap bg-black ">
      <div className="w-60 relative bg-black border-r-2 shadow max-h-full flex-col justify-between flex">
        <div className="">
          <Menu as="div" className="relative  mt-8 flex justify-center mb-8 transition-all,1">
            <div>
              <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
              <Link to="/empHome" className="flex items-center focus focus:ring-white">
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
              <Link to="/empHome/createJob" className="flex items-center focus focus:ring-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                </svg>
                <span className="text-sm ml-2">Post A Job</span>
              </Link>
            </li>
            <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                            <Link to="/empHome/showJob" className="flex items-center focus focus:ring-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                <circle cx={12} cy={12} r={9} />
                              </svg>
                              <span className="text-sm ml-2 shrink-0">Show all job</span>
                            </Link>
                          </li>
            <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
              <Link to="#" className="flex items-center focus focus:ring-white">
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
      <div className="container h-full w-full px-5 py-5 bgClass" >

    
        <form
          onSubmit={handleSubmit}
          className="text-white p-8 rounded-lg shadow-lg w-full mx-auto max-w-2xl z-1"
        >
          <h2 className="text-2xl font-bold mb-6">Create Job</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Company</label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Salary</label>
            <input
              type="text"
              name="salary"
              required
              value={formData.salary}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
            />
          </div>
          <div className="flex justify-between">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
            />
          </div>
          <div className="w-20 bg-gray-600 rounded-xl ">
          <img src={image} alt="" className="rounded-xl"/>
          </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Job Role</label>
            <select name="jobRole"
            required
              value={formData.jobRole}
              onChange={handleChange} className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus">
              <option value="">Select Developer Role</option>
              <option value="frontend-developer">Frontend Developer</option>
              <option value="backend-developer">Backend Developer</option>
              <option value="fullstack-developer">Full-Stack Developer</option>
              <option value="mobile-developer">Mobile App Developer</option>
              <option value="game-developer">Game Developer</option>
              <option value="devops-engineer">DevOps Engineer</option>
              <option value="data-scientist">Data Scientist</option>
              <option value="data-engineer">Data Engineer</option>
              <option value="database-administrator">Database Administrator</option>
              <option value="business-intelligence-analyst">Business Intelligence Analyst</option>
              <option value="cloud-architect">Cloud Architect</option>
              <option value="network-engineer">Network Engineer</option>
              <option value="system-administrator">System Administrator</option>
              <option value="it-support-specialist">IT Support Specialist</option>
              <option value="cybersecurity-analyst">Cybersecurity Analyst</option>
              <option value="penetration-tester">Penetration Tester (Ethical Hacker)</option>
              <option value="security-engineer">Security Engineer</option>
              <option value="machine-learning-engineer">Machine Learning Engineer</option>
              <option value="ai-specialist">AI Specialist</option>
              <option value="nlp-engineer">Natural Language Processing (NLP) Engineer</option>
              <option value="blockchain-developer">Blockchain Developer</option>
              <option value="iot-developer">IoT Developer</option>
              <option value="quantum-computing-specialist">Quantum Computing Specialist</option>
              <option value="ux-designer">UX Designer</option>
              <option value="ui-designer">UI Designer</option>
              <option value="vr-ar-developer">VR/AR Developer</option>
              <option value="technical-writer">Technical Writer</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Work mode</label>
            <select name="workMode"
            required
              value={formData.workMode}
              onChange={handleChange} className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus">
              <option value="">Select work mode</option>
              <option value="Part Time">Part Time</option>
              <option value="Full Time">Full Time</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Job Type</label>
            <select name="jobType"
            required
              value={formData.jobType}
              onChange={handleChange} className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus">
              <option value="">Select job type</option>
              <option value="Work from Home(WFH)">Work from Home(WFH)</option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Requirements</label>
            {formData.requirements.map((req, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={req}
                  onChange={(e) => handleArrayChange(e, "requirements", index)}
                  className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("requirements")}
              className="text-blue-400 text-sm"
            >
              + Add Requirement
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Skills</label>
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleArrayChange(e, "skills", index)}
                  className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("skills")}
              className="text-blue-400 text-sm"
            >
              + Add Skill
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Last Date</label>
            <input
              type="date"
              name="lastDate"
              value={formData.lastDate}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>




  );
};

export default CreateJob;
