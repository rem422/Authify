import { useState } from 'react'
import axios from "axios";
import{ Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);

      console.log(res.data);

      // Check backend response
      if (res.data.success === false) {
        setErrorMessage(res.data.message);
        setLoading(false);
        return;
      }

      setErrorMessage(false)
      // Navigate on success
      navigate("/sign-in");

    } catch (err) {
      setLoading(false);

      // Handle backend or network errors
      if (err.response && err.response.data) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage("Something went wrong!");
      }
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
        type="text" 
        placeholder='Username' 
        id='username' 
        className='bg-slate-100 p-3 rounded-lg focus:outline-none'
        onChange={handleChange}
        />
        <input 
        type="email" 
        placeholder='Email' 
        id='email' 
        className='bg-slate-100 p-3 rounded-lg focus:outline-none'
        onChange={handleChange}
        />
        <input 
        type="password" 
        placeholder='Password' 
        id='password' 
        className='bg-slate-100 p-3 rounded-lg focus:outline-none'
        onChange={handleChange}
        />
        <button 
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 duration-300 disabled:opacity-80'>
          { loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account? </p>
          <Link 
            to='/signin' 
            className='text-blue-500'
            >
              Sign in
          </Link>
      </div>
      { errorMessage && <p className='text-red-500 mt-5'>{errorMessage}</p>}
    </div>
  )
}

export default SignUp