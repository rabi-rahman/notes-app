import React from 'react'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/signin');
  }

  return (
    <div className='flex items-center justify-between px-6 py-2 drop-shadow bg-white'>
        <h2 className='text-xl font-bold text-black py-2'>Notes</h2>

        <Profile onLogout={onLogout}/>  
    </div>
    
  )
}

export default Navbar