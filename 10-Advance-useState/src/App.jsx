import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(10)
  const number = () => {
    setnum(prev => prev +1)
    setnum(prev => prev +1)
    setnum(prev => prev +1)
    setnum(prev => prev +1)
    setnum(prev => prev +1)
  

   
  }
  return (
    <div>
      <h4>{num}</h4>
      <button onClick={number}>click</button>
    </div>
  )
}

export default App
