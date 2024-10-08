import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'


const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className='w-80 flex items-center rounded-md bg-slate-100 px-4'>
      <input type="text"
      placeholder='Search Notes'
      className='w-full text-sm bg-transparent py-[11px] outline-none'
      value={value}
      onChange={onChange} />

      
      {value && (
        <IoMdClose className='text-xl text-slate-500 cursor-pointer hover:text-black mr-3' onClick={onClearSearch} />)
      }
      <FaMagnifyingGlass className='text-slate-400 cursor-pointer hover:text-black' onClick={handleSearch} />
    </div>
  )
}

export default SearchBar