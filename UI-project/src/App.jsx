import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  const data = [
    {img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
     intro: "",
     tag: "Satisfied",
     color: "blue"
    },
    {img: "https://images.unsplash.com/photo-1603202662706-62ead3176b8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=669",
     intro: "",
     tag: "Underserved",
      color: "plum"

    },
    {img: "https://images.unsplash.com/photo-1747741744139-663023d082bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
     intro: "",
     tag: "Underbanked",
     color: "violet"
    },
    {img:"https://images.unsplash.com/photo-1727268531066-1df9a7b21b3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
     intro: "",
     tag: "Underreached",
     color: "seagreen"
    }
  ]
  return (
    <div>
      <Section1  data={data}/>
      
    </div>
  )
}

export default App
