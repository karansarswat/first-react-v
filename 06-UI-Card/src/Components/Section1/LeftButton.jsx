import React from 'react'

const LeftButton = () => {
  return (
    <div className='flex gap-5 mt-10'>
        <button className='bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 duration-300'>Add to Cart</button>
        <button className='border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white duration-300'>Buy Now</button>
    </div>
  )
}

export default LeftButton
