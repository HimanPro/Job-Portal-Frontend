import { useRef } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'

import { Link, useNavigate } from 'react-router-dom';

export default function EmployeSignUp() {
  let navigate  = useNavigate()


  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let numberRef = useRef();
 
  const Handelsubmit = async (e)=>{
    e.preventDefault()
    let obj = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      number: numberRef.current.value,
      role: "Employe"
    }
    console.log(obj);

    try {
      let res = await axios.post('https://job-portal-backend-1-wd2i.onrender.com/user/create', obj)
      console.log(res);
      if(res.data.success){
       toast.success(res.data.msg, {position:'top-center'})
        navigate('/login')
      }
      else{
        toast.error(res.data.msg, {position:'top-center'})

      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div className="font-[sans-serif]">
        <div className="loginbackground grid lg:grid-cols-1 gap-4 max-lg:gap-12 bg-gradient-to-r from-blue-500 to-green-700 px-8 py-12 h-[350px] " >
          <div className="bg-white rounded-xl sm:px-6 px-4 py-8 max-w-md w-full m-auto h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto ">
            <form onSubmit={Handelsubmit}>
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold text-gray-800">Sign up for Company</h3>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Full Name</label>
                <input name="fullname" type="text" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter your full name" ref={nameRef}/>
              </div>
              <div className="mt-4">
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <input name="email" type="email" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter your email address" ref={emailRef}/>
              </div>
              <div className="mt-4">
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <input name="password" type="password" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Create Link password" ref={passwordRef}/>
              </div>
              <div className="mt-4">
                <label className="text-gray-800 text-sm mb-2 block">Contact Number</label>
                <input name="contact-number" type="text" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter your contact number" ref={numberRef}/>
              </div>
              <div className="mt-8">
                <button type="submit" className="w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                  Sign up
                </button>
              </div>
              <p className="text-sm mt-8 text-center text-gray-800">Already have an account? <Link to='/login' className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Log in here</Link></p>
            </form>
          </div>
        </div>
        </div>

      </>
      )
}
