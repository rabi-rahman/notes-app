import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import TagInput from './input/TagInput'

const AddEditNotes = ({noteData, type, onClose}) => {

    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[tags, setTags] = useState([]);
    const[error,setError] = useState(null);

    const addNewNote = () => {}

    const editNote = () => {}

    const handleAddNote = () => {
        if(!title){
            setError("Please enter the title")
            return;
        }
        if(!content){
            setError("Please enter the content")
            return;
        }

        setError("")

        if(type === 'edit'){
            editNote()
        }else{
            addNewNote()
        }
    }

    return (
    <div className='relative'>
        <button className='flex w-8 h-8 rounded-full items-center justify-center absolute -top-3 -right-3 hover:bg-slate-500'
        onClick={onClose}>
            <IoMdClose className='text-xl text-slate-400 cursor-pointer hover:text-white'/>
        </button>

        <div className='flex flex-col gap-2'>
            <label className='input-label'>TITLE</label>
            <input
            type='text'
            className='text-2xl text-slate-950 outline-none'
            placeholder='Go To Gym at 5'
            value={title}
            onChange={({target}) => setTitle(target.value)}
            />
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'>CONTENT</label>
            <textarea
            type='text'
            className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
            placeholder='Content'
            rows={10}
            value={content}
            onChange={({target}) => setContent(target.value)}>
            </textarea>
        </div>
        <div className='mt-3'>
            <label className='input-label'>TAGS</label>
            <TagInput tags={tags} setTags={setTags}/>
        </div>  

        {error && (<p className='text-sm text-red-600 pt-4'>{error}</p>)}

        <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>
            ADD
        </button>
    </div>
  )
}

export default AddEditNotes