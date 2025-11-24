import React from 'react'

const Herotext = () => {
  return (
    <div className="relative w-full h-screen  bg-cover bg-center">
      {/* Hero Text */}
      <h3 className=" flex justify-between mt-8 absolute top-10 left-1/3 transform -translate-x-1/2 text-2xl font-bold text-black text-center">
        Drop type cushion chair
      </h3>
      <span className="absolute top-16 left-1/3 transform -translate-x-1/2 text-black mt-10 ">8/10.1.5k reviews</span>
        <p className="absolute top-20 left-1/3 transform -translate-x-1/2 w-2/3 text-center text-gray-700 mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, optio nihil. Veniam, maxime fuga! Consequatur.</p>
    
    </div>
  )
}

export default Herotext
