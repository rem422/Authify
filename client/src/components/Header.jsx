import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Header = () => {
    const { currentUser } = useSelector((state )=> state.user)
  return (
    <header className='bg-slate-200'>
        <div className='flex items-center justify-between max-w-6xl mx-auto p-5'>
            <Link to="/" className='font-bold text-xl'>Authify</Link>
            <ul className='flex gap-4'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                    <Link to="/profile">
                    {currentUser ? (
                        <img src={currentUser.profilePicture} alt="profile" className='h-7 w-7 rounded-full object-cover'/>
                    ) : (
                        <li>Sign In</li>
                    )}
                    </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header