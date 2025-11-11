import React from 'react'
import { useSelector } from "react-redux"
import { useRef } from 'react'

const Profile = () => {
  const { currentUser } = useSelector(state => state.user);
  const fileRef = useRef(null);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input type="file" ref={fileRef} hidden accept='image/*'/>
        <img 
          src={currentUser.profilePicture} 
          alt="profile"  
          className='h-24 w-24 self-center rounded-full object-cover cursor-pointer mt-2'
          onClick={() => fileRef.current.click()}
        />
        <input defaultValue={currentUser.username} type="text"  id='username' placeholder='Username' className='bg-slate-100 rounded-lg p-3'/>
        <input defaultValue={currentUser.email} type="email"  id='email' placeholder='Email' className='bg-slate-100 rounded-lg p-3'/>
        <input type="password"  id='password' placeholder='Password' className='bg-slate-100 rounded-lg p-3'/>
        <button className='bg-blue-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>
          Update
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile