// import React  from 'react'
import { useState } from 'react'
import{ Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

const handleChange = (e) => {
  setFormData({...formData, [e.target.id]: e.target.value});
}

const handleSubmit = async(e) => {
  e.preventDefault();

  try{
    setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setError(data.message);
      console.log(data);
      
      if(data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      navigate('/sign-in');
      
  }catch(err) {
    setLoading(false);
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong");
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
      { error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignUp