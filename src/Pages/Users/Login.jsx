import axios from 'axios';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin } from '../../Store/UserSlice';
const Login = () => {

  let dispatch = useDispatch()
  let navigate = useNavigate()

  let emailRef = useRef();
  let passwordRef = useRef();

  const HandelSubmit = async (e) => {
    e.preventDefault()
    console.log('run');
    let obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    try {
      let res = await axios.post('http://localhost:8090/user/login', obj)
      console.log(res);
      if (res.data.success) {
        localStorage.setItem('JobPortal', JSON.stringify({ token:res.data.token, role:res.data.role, login:true }))
        dispatch(userLogin(res.data))
        if (res.data.role === 'Student') {
          toast.success(res.data.msg, { position: 'top-center' })
          navigate('/')
        }
        else {
          toast.success(res.data.msg, { position: 'top-center' })
          navigate('/empHome')
        }
      }
      else {
         toast.error(res.data.msg, { position: 'top-center' })
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="font-[sans-serif] bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 items-center bg-white shadow-lg rounded-lg">
          <form className="lg:col-span-3 md:col-span-2 max-w-lg w-full p-8 mx-auto" >
            <div className="mb-10">
              <h3 className="text-gray-800 text-3xl font-bold">Welcome Back!</h3>
              <p className="text-gray-600 text-sm mt-2">Sign in to access exclusive job opportunities and resources.</p>
            </div>

            <div className="mt-4">
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input name="email" type="email" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter your email address" ref={emailRef} />
            </div>
            <div className="mt-4">
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input name="password" type="password" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Create Link password" ref={passwordRef} />
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link to='#' className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <button type="button" onClick={HandelSubmit} className="w-full mt-6 py-2 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md shadow-md focus:outline-none">
              Sign In
            </button>
            <p className="text-sm text-gray-700 mt-6 text-center">
              Don’t have an account? <Link to='/signup' className="text-blue-600 font-medium hover:underline">Register here</Link>
            </p>
          </form>
          <div className="hidden mx-5 lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 rounded-r-lg">
            <h4 className="text-2xl font-bold mb-4">Unlock Your Career Potential</h4>
            <p className="text-sm text-center leading-relaxed">Join thousands of professionals connecting with top employers. Login now to start your journey.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
