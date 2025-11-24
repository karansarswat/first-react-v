import React from 'react'
import { useState } from 'react'


const App = () => {
 const [name, setname] = useState('')

 const handleChange = (e) => {
   e.preventDefault();
   console.log('Form submitted by ' , name);
   setname('')
 }
  return (
    <div>
      <h4>Hello {name}</h4>
      <form onSubmit={(e) =>{
        handleChange(e);
        
      }} >
        <input type="text" placeholder='Enter Your Name' 
        value={name}
        onChange={(e => {
          setname(e.target.value)
        })}
        />
        <button>Submit</button>

      </form>
      
    </div>
  )
}

export default App
