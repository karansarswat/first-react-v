import React, { useState } from 'react'
import { X } from 'lucide-react';


const App = () => {
    const [title, setTitle] = useState('');
    const [task, setTask] = useState('')
    const [data, setData] = useState([])
    const handler = (e) => {
        e.preventDefault(); 

        const copyData = [...data];
        copyData.push({
            title,
            task
        });
        setData(copyData);       
        setTitle('');
        setTask('');
    }

    const delteData = (idx) => {
        const copyData = [...data];
        copyData.splice(idx, 1);
        setData(copyData);
    }

  
  return (
    <div className='h-screen lg:flex bg-gray-400 text-white' >
        <form onSubmit={(e) => {
            handler(e)
        }}
         className='flex gap-4 lg:w-1/2 items-start p-10 flex-col'>
            
            {/* First Inpur */}

            <input 
            type="text" 
            placeholder='Enter Your Note'
            className='px-5 w-full font-medium py-2  border-2 outline-none rounded'
            value={title}
            onChange={(e) =>{
                setTitle(e.target.value)
            }}
             />

            {/* Second Input */}

            <textarea 
            type="text"
            placeholder='Enter Your Details Here'
            className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none'
            value={task}
            onChange={(e) => {
                setTask(e.target.value)
            }}
           /> 
           <button  className='bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 duration-300 active:bg-blue-800'>Add</button>
        </form>

        <div className='lg:w-1/2 border-l-2 p-10'>
            <h1 className='text-3xl  font-bold'>Recent Notes</h1>
            <div className='flex flex-wrap gap-5 mt-6 h-[90%] overflow-auto'>
            {
                data.map(function(elem,idx){
                    return (
                              <div key={idx} className='relative h-52 w-40 rounded-xl text-black p-4 bg-violet-200'>
                                <h2 onClick={(idx) =>{
                                    delteData(idx)
                                }}  className='absolute s top-5 right-5 active:text-red-600'><X /></h2>
                                <h3 className='leading-tight text-xl font-medium'>{elem.title}</h3>
                                <p className='text-sm text-gray-600 '>{elem.task}</p>
                              </div>
                    )
                })
            }
                
            </div>
        </div>

    </div>
  )
}

export default App