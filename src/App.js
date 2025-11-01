import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Users/Home';
import Login from './Pages/Users/Login';
import SignUp from './Pages/Users/SignUp';
import Landing from './Pages/Landing';
import PNF from './Pages/PNF';
import { ToastContainer } from 'react-toastify';
import EmployeHome from './Pages/Admin/EmployeHome';
import EmployeSignUp from './Pages/Admin/EmployeSignUp';
import 'react-toastify/dist/ReactToastify.css';
  import { useSelector } from 'react-redux';
import Contect from './Pages/Contect';
import CreateJob from './Pages/Admin/CreateJob';
import ShowPostAllJob from './Pages/Admin/ShowPostAllJob';
import EditJob from './Pages/Admin/EditJob';
import JobApplicationForm from './Pages/Users/JobApplicationForm';

function App() {

  let data = useSelector((state)=>state.user)
  let login = data.login 
  let role = data.role

  return (
    <>
    <BrowserRouter>
   <div className={login === true && role === 'Student'? ' mb-[64px]':''}>{login === true && role === 'Student' && <Navbar/>}</div>
    <Routes>
      <Route path='/landing' element={login === false ? <Landing/> : role === 'Student' ? <Navigate to='/'/>:<Navigate to='/empHome'/>}/>
      
      <Route path='/' element={<Landing/> }/>
      
      <Route path='/login' element={login === false ? <Login/> : role === 'Student' ? <Navigate to='/'/>:<Navigate to='/empHome'/>}/>
      
      <Route path='/signup' element={login === false ? <SignUp/>:role === 'Student' ? <Navigate to='/'/>:<Navigate to='/empHome'/>}/>
      
      <Route path='/empHome' element={login === true && role === 'Employe' ? <EmployeHome/> : <Navigate to='/landing'/>}/>
      
      <Route path='/empSignUp' element={login === false ? <EmployeSignUp/> : role === 'Student' ? <Navigate to='/'/>:<Navigate to='/empHome'/>}/>
      <Route path='/contact' element={<Contect/>}/>
      <Route path='/empHome/createJob' element={<CreateJob/>}/>
      <Route path='/empHome/showJob' element={<ShowPostAllJob/>}/>
      <Route path='/empHome/editJob' element={<EditJob/>}/>
      <Route path='/jobForm' element={<JobApplicationForm/>}/>
      <Route path='/*' element={<PNF/>}/>

    </Routes>
    <ToastContainer />
    </BrowserRouter>
    </>
  );
}

export default App;
