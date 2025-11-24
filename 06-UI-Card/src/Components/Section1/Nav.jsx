import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Nav = () => {
  return (
    <div className=" w-full h-16">
      <ul className=" flex items-center gap-5 absolute top-0 left-1/2 transform -translate-x-1/2 p-5">
        <li className="p-3 text-black rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-110 hover:shadow-xl">Home</li>
        <li className="p-3 text-black rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-110 hover:shadow-xl">About</li>
        <li className="p-3 text-black rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-110 hover:shadow-xl">Services</li>
        <li className="p-3 text-black rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-110 hover:shadow-xl">Contact</li>
        <li className="p-3 text-black rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-110 hover:shadow-xl">
          <i className="ri-shopping-cart-2-line"></i>
        </li>
      </ul>
    </div>
  )
}

export default Nav
