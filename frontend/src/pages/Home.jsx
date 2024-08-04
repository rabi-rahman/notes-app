import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from '../components/AddEditNotes'
import Modal from 'react-modal'

const Home = () => {

  const [editNote,setEditNote] = useState({
    isShown:false,
    type:"add",
    data:null,
  });

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

    <button className='w-12 h-12 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10'
    onClick={() => {
      setEditNote({ isShown:true, type:'add', data:null })
    }}>
      <MdAdd className='text=[32px] text-white' />
    </button>

    <Modal
    isOpen={editNote.isShown}
    onRequestClose={() => {}}
    style={{
      overlay:{
        backgroundColor: "rgba(0,0,0,0.2)",
      },
    }}
    contentLabel=''
    className='w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll'>
      <AddEditNotes />   
    </Modal>

    </>
  )
}

export default Home