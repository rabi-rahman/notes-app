import React from 'react'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import { MdAdd } from 'react-icons/md'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-4 mt-8'>
      <NoteCard 
      title="whats up"
      date="3rd oct 2011"
      content="what you done today"
      tags="#Meeting"
      isPinned={true}
      onEdit={()=>{}}
      onDelete={()=>{}}
      onPinNote={()=>{}} />
      </div>
    </div>

    <button className='w-12 h-12 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' onClick={() => {}}>
      <MdAdd className='text=[32px] text-white' />
    </button>
    </>
  )
}

export default Home