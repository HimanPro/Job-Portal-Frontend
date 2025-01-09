import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from 'antd';
import JobApplicationForm from './JobApplicationForm';

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const [AllJobs, setAllJobs] = useState([]);

  const getAllJob = async () => {
    let res = await axios.get('https://job-portal-backend-1-wd2i.onrender.com/job/getAll')
    setAllJobs(res.data.jobs)
  }
  useEffect(() => {
    getAllJob()
  }, [])



  // function handleTabClick(index) {
  //   setActiveTabIndex(index);
  //   setActiveTab(TabList[index]);
  // }

  const [ViewJob, setViewJob] = useState({
    title: "",
    description: "",
    company: "",
    userId: "",
    salary: "",
    location: "",
    image: "",
    jobRole: "",
    workMode: "",
    jobType: "",
    requirements: [""],
    skills: [""],
    lastDate: "",
  });
  const [Job_Id, setJob_Id] = useState('');
  const handleApply = (job_id) => {
    setJob_Id(job_id)
    setIsFormModalOpen(true)
  }

  const handleJobDetails = (job) => {
    setIsModalOpen(true);
    setViewJob(job)

  }
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsFormModalOpen(false);
  };
  return (
    <>
      <div id='main' className="bg-black text-white overflow-hidden font-plusJakartaSans max-w-[1440px] mx-auto">
        <div className="mx-4  my-4" >
          <div
            className={`font-cabin text-[30px] md:text-[40px] font-[900] text-center`}
          >
            <p>
              Newest{" "}
              <span className="bg-PrimaryGradient bg-clip-text text-transparent">
                Jobs
              </span>{" "}
              For You
            </p>
          </div>

          <div>
            <p className="md:text-lg text-[#D8D8D8] font-normal text-center">
              Get the fastest application so that your name is above other
              application
            </p>
          </div>

          <div className="flex justify-center">
            {/* <div className="text-center pt-8 flex sm:justify-center gap-5 md:gap-[74px] overflow-x-auto  whitespace-nowrap scrollbar-thin">
              {TabList.map((tabName, index) => (
                <div key={index} onClick={() => handleTabClick(index)}>
                  <p
                    className={`cursor-pointer text-sm md:text-base ${ActiveTabIndex === index ? "text-white " : "text-[#959595] "
                      }`}
                  >
                    {tabName}
                  </p>
                  <div
                    className={`${ActiveTabIndex === index && "bg-PrimaryGradient"
                      } p-[1px] mt-[9px] `}
                  ></div>
                </div>
              ))}
            </div> */}
          </div>
          {/* <div className='flex gap-4 flex-col lg:flex-row mx-auto mt-8 md:flex-col sm:flex-col'>
            <input type="text" className='w-[180px] bg-slate-700 text-white p-2 border-2 rounded-md' placeholder='Enter your title'/>
            <input type="text" className='w-[180px] bg-slate-700 text-white p-2 border-2  rounded-md' placeholder='location'/>
            <button className='w-[180px] px-6 bg-green-700 border-2 rounded-lg'>Search</button>
          </div> */}
          {/* <div className="flex max-w-xs w-full gap-2">
            <input type="text" placeholder="Search something..." className=" bg-gray-100 px-4 py-2 rounded-xl outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all" />
            <input type="text" placeholder="Search something..." className=" bg-gray-100 px-4 py-2 rounded-xl outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all" />
            <button></button>
          </div> */}


          <div className='flex'>
            <div className="flex flex-wrap justify-evenly gap-4 mt-4">
              {AllJobs.map((ele, i) => {

                let lastDate = new Date(ele.lastDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'numeric', day: 'numeric' })

                return <div className={`font-cabin relative  overflow-hidden bg-[#111111] p-[22px]`}>
                  <div className="flex gap-[15px] ">
                    <div className="border border-white px-2 sm:px-5 py-[7px] sm:py-[14px] rounded-[5px] hover:cursor-pointer hover:bg-[#373636] transition ease-in-out duration-500">
                      <p>Last Date:- {lastDate}</p>
                    </div>
                    {ele.location && <div className="border border-white  px-2 sm:px-5 py-[7px] sm:py-[14px] rounded-[5px] hover:cursor-pointer  hover:bg-[#373636] transition ease-in-out duration-500">
                      <p>{ele?.location}</p>
                    </div>}
                    <div className="border border-white  px-2 sm:px-5 py-[7px] sm:py-[14px] rounded-[5px] hover:cursor-pointer  hover:bg-[#373636] transition ease-in-out duration-500">
                      <p>{ele?.salary}</p>
                    </div>
                  </div>
                  <div className="my-[22px]">
                    <p className="text-[22px] font-bold">{ele?.title}</p>
                    <p className="text-[#FFFFFF] text-[14.79px] font-normal">
                      {ele?.company}
                    </p>
                  </div>
                  <div className="my-[22px]">

                    <p className="text-[#FFFFFF] text-[18px] font-bold">
                      Skills:- {ele?.skills.map((skill, i) => {
                        return <span className="text-[15px] font-light">{skill}, </span>
                      })}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className='flex gap-5'>
                      <button
                        className="bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] text-white py-[7px] sm:py-[14px] px-6 font-semibold hover:opacity-90 transition-opacity duration-300 rounded-[5px]"
                        onClick={() => handleApply(ele._id)}
                      >
                        {/* {apply ? "Applied" : "Apply"} */}
                        Apply
                      </button>
                      <button
                        className="bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] text-white py-[7px] sm:py-[14px] px-6 font-semibold hover:opacity-90 transition-opacity duration-300 rounded-[5px]"
                        onClick={() => handleJobDetails(ele)}
                      >

                        View More
                      </button>
                    </div>




                    <div className="flex items-center gap-[5px]">
                      <p className="text-[14.79px] font-bold"><span className='pr-3'>{ele.applicants.length} </span>Applied</p>
                    </div>
                  </div>
                </div>
              })}
            </div>

          </div>

        </div>
        <div className="mx-4 xl:mx-[175px] my-[50px]">
          <div className="flex flex-col md:flex-row gap-10 xl:gap-[112px] items-center justify-center">
            <div>
              <img
                src="/assets/images/icon_group.png"
                alt="icon group image"
                height={439}
                width={535}
                className="w-[300px] md:w-[400px] xl:w-[535px]"
              />
            </div>

            <div className="flex flex-col gap-[25px]">
              <div className={`font-cabin text-[30px] md:text-[40px] font-[900]`}>
                <p>
                  Work With{" "}
                  <span className="bg-PrimaryGradient bg-clip-text text-transparent">
                    Exciting
                  </span>
                  <br />
                  Companies
                </p>
              </div>

              <div>
                <p className="md:text-lg text-[#D8D8D8] font-normal">
                  Et in sapien enim congue interdum pulvinar non sed. <br /> Ac
                  augue netus tellus semper.
                </p>
              </div>

              <div>
                <a href='#main' className="bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] text-white font-semibold hover:opacity-90 transition-opacity duration-300 rounded-[5px] md:h-[60px] py-2 px-5 md:px-14 ">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        <Modal title="Job Details" open={isModalOpen} className='top-2' cancelButtonProps={{ style: { display: 'none' } }} okButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel}>
          <div className="bg-gray-400 shadow-md flex flex-col justify-between rounded-lg overflow-hidden mx-auto">
            {/* Job Image */}
            {ViewJob.image && (
              <img
                src={ViewJob.image}
                alt=''
                className="w-full h-40 object-contain"
              />
            )}

            {/* Job Details */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900">{ViewJob.title}</h2>
              <p className="text-white mt-2">{ViewJob.description}</p>

              <div className="mt-4 text-purple-950">
                <p>
                  <span className="font-semibold">Company: </span>
                  {ViewJob.company}
                </p>
                <p>
                  <span className="font-semibold">Work Mode: </span>
                  {ViewJob.workMode}
                </p>
                <p>
                  <span className="font-semibold ">Salary: </span>
                  {ViewJob.salary}
                </p>
                <p>
                  <span className="font-semibold">Job Role: </span>
                  {ViewJob.jobRole}
                </p>
                <p>
                  <span className="font-semibold">Job Type: </span>
                  {ViewJob.jobType}
                </p>
                <p>
                  <span className="font-semibold">Location: </span>
                  {ViewJob.location}
                </p>

              </div>


              {/* Requirements */}
              {ViewJob.requirements.length > 0 && (
                <div className="mt-4 text-red-950">
                  <h3 className="font-semibold">Requirements:</h3>
                  <ul className="list-disc list-inside text-red-950">
                    {ViewJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {ViewJob.skills.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold">Skills:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {ViewJob.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className='p-4'>
              <p className='text-yellow-900'>
                <span className="font-semibold">Last Date: </span>
                {new Date(ViewJob.lastDate).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Action Buttons */}
          </div>

          {/* <div className="container text-sm h-full w-full py-5 flex flex-wrap  gap-5">
                       

                      </div> */}
        </Modal>
        <Modal title="Job Form" open={isFormModalOpen} className='top-2' cancelButtonProps={{ style: { display: 'none' } }} okButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel}>
          <JobApplicationForm Job_Id={Job_Id} set_AllJob = {AllJobs} model={setIsFormModalOpen} />
        </Modal>

      </div>
    </>
  );
}





