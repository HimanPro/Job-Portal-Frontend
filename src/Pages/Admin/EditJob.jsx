import React, { useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const EditJob = (prpos) => {
  
let storData = useSelector((state)=>state.user)
  const [jobdata, setjobdata] = useState(prpos.Data);
  console.log(jobdata);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setjobdata({ ...jobdata, [name]: value });
  };

  const handleArrayChange = (e, key, index) => {
    const newArray = [...jobdata[key]];
    newArray[index] = e.target.value;
    setjobdata({ ...jobdata, [key]: newArray });
  };

  const addField = (key) => {
    setjobdata({ ...jobdata, [key]: [...jobdata[key], ""] });
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    let res = await axios.put(`https://job-portal-backend-1-wd2i.onrender.com/job/update/${jobdata._id}`, jobdata, {
      headers:{
        'Authorization': storData.token
      }
    })
    if(res.data.success){
      prpos.modal(false)
      prpos.render()
      toast.success(res.data.msg, {position:'top-right'})
    }
    else{
      toast.error(res.data.msg, {position:'top-right'})
    }
   
  };
  const handleImageChange = async (e) => {
    e.preventDefault();
    let file = e.target.files[0]

    let formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'mediaApp')

    let res = await axios.post('https://api.cloudinary.com/v1_1/dz85q4hf5/upload', formData)
    let url = res.data.secure_url
    setjobdata({...jobdata, image:url})
    
  }
  return (
    <div className="flex flex-no-wrap bg-black ">

      <div className="container h-full w-full px-5 py-5 bgClass" >

    
        <form
          onSubmit={handleSubmit}
          className="text-white rounded-lg shadow-lg w-full mx-auto max-w-2xl z-1"
        >

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              required
              value={jobdata.title}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={jobdata.description}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
            > </textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Company</label>
            <input
              type="text"
              name="company"
              required
              value={jobdata.company}
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
              value={jobdata.salary}
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
              value={jobdata.location}
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
          <img src={jobdata.image} alt="" className="rounded-xl"/>
          </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Job Role</label>
            <select name="jobRole"
            required
              value={jobdata.jobRole}
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
              value={jobdata.workMode}
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
              value={jobdata.jobType}
              onChange={handleChange} className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus">
              <option value="">Select job type</option>
              <option value="Work from Home(WFH)">Work from Home(WFH)</option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Requirements</label>
            {jobdata.requirements.map((req, index) => (
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
            {jobdata.skills.map((req, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={req}
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
              value={jobdata.lastDate}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>




  );
};

export default EditJob;
