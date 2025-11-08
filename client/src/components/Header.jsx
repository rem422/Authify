import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header