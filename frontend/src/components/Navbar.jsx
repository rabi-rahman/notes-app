import React, { useState } from 'react'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar';


const Navbar = () => {

  const [searchQuery,setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/signin');
  }

  const onChange = (e) =>{
    setSearchQuery(e.target.value)
  }

  const handleSearch = () =>{
  };

  const onClearSearch = () =>{
    setSearchQuery("")
  }

  return (
    <div className='flex items-center justify-between px-6 py-2 drop-shadow bg-white'>
        <h2 className='text-xl font-bold text-black py-2'>Notes</h2>

        <SearchBar value={searchQuery} 
        onChange={onChange}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}/>

        <Profile onLogout={onLogout}/>  
    </div>
    
  )
}

export default Navbar