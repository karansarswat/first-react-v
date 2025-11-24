import React from 'react'

const App = () => {
  function logic(){
    console.log("Function logic executed");
   
  }
  return (
    <div>
      <button onClick={logic}>Click me</button>
    </div>
  )
}

export default App
