import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function increaseNum(){
    setnum(num + 1)
  }
  function decreaseNum(){
    setnum(num - 1)
  }

  function resetNum(){
    setnum(0)
  }
  return (
    <div>
      <h1>Counter</h1>
      <h3>{num}</h3>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={resetNum}>Reset</button>
    </div>
  )
}

export default App
