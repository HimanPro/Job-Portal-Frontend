import axios from "axios";
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const JobApplicationForm = ({Job_Id, model, set_AllJob}) => {
    let storData = useSelector((state)=>state.user)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address:"",
    resume: "",
    comments: "",
    job: Job_Id
  });

console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    let resume = e.target.files[0]
     let resumeFile = new FormData()
     resumeFile.append('file', resume)
     resumeFile.append('upload_preset', 'mediaApp')
      let res = await axios.post('https://api.cloudinary.com/v1_1/dz85q4hf5/upload', resumeFile)
         let url = res.data.secure_url
         setFormData({...formData, resume:url})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post('https://job-portal-backend-1-wd2i.onrender.com/applicants/apply', formData, {
      headers:{
        'Authorization': storData.token
      }
    })
    let data = res.data
    if(data.success){
      model(false)
      toast.success(data.msg, {position:'top-right'})
    }
    else{
      toast.error(data.msg, {position:'top-right'})

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your current address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full p-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <iframe src={formData.resume} frameborder="0"></iframe>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">Additional Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              placeholder="Add any additional information"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
