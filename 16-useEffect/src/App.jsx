import React, {  useEffect, useState } from 'react'

const App = () => {
const [num, setNum] = useState(0);
const [num2, setNum2] = useState(20)

useEffect(() => {
  console.log('useEffect runned');
} , [num])
  return (
    <div>
  <h2>{num}</h2>
  <h2> Num is {num2}</h2>
  <button onMouseEnter={() => {
    setNum(num +1)
  
  }}

  onMouseLeave={() =>{
    setNum2(num2 +20)
  }}

  >click</button>
    </div>
  )
}

export default App