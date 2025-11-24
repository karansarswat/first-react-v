import React, { useEffect, useState } from 'react'

  
import axios from 'axios'


const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1)
const getData = async () => {
  const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
  setData(res.data);
  console.log(res.data);
}
useEffect(function() {
  getData();

  
},[index])
 let  userData = <h3 className='font-bold text-center  text-xl absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>Lodaing...</h3>

 if(data.length > 0){
  userData = data.map(function(elem , idx){
   return <div key={idx}>
    <a href={elem.url} target='_blank'>
    <div className='h-40 w-44 rounded-xl overflow-hidden'>
    <img className='h-full w-full object-cover ' src={elem.download_url} alt="" />
   </div>
   <h2 className='font-medium text-center hover:underline'>{elem.author}</h2>
   </a>
   </div>
  })

 }
  return (
    
    <div className='bg-black h-screen p-4 overflow-auto text-white '>

    <div className=' m-8 flex flex-wrap gap-4'>
      {userData}
    </div>
  <div  className=' flex justify-center items-center gap-8 p-4'>
    <button
      onClick={() => {
        setData([])
        if (index > 1) {
          setIndex(index - 1)
        } else {
          setIndex(1)
        }
      }}
      style={{ opacity: index === 1 ? 0.5 : 1 }}
      disabled={index === 1}
      className={'bg-violet-400  text-white  font-semibold rounded py-2 px-4 ' + (index === 1 ? 'cursor-not-allowed' : 'cursor-pointer') + ' active:scale-95'}
    >
      Prev Page
    </button>
    <h4>Page {index}</h4>
    <button 
      onClick={() => {
        setIndex(index + 1)
        setData([])
      }} 
      className='bg-violet-400  text-white  font-semibold rounded py-2 px-4 cursor-pointer active:scale-95' 
    >
      Next Page
    </button>
    
  </div>
    </div>
  )
}

export default App