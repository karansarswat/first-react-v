import React from 'react'

const RightCardContentCard = (props) => {
  return (
    <div>
       <div className='absolute top-0 left-0 h-full w-full p-6  flex flex-col justify-between'>
        <h2 className='w-8 h-8 text-2xl font-semibold items-center rounded-full flex justify-center bg-white'>{props.id}</h2>
        <div>
          <p className=' leading-normal text-white font-semibold '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, expedita voluptate. Minus eos quasi animi!</p>
          <div className='flex gap-2 justify-between mt-4'>
            <button style={{backgroundColor: props.color}} className='text-white px-2 py-1  rounded-full'>{props.tag}</button>
            <button style={{backgroundColor: props.color}} className=' text-white px-2 py-1 font-medium rounded-full '><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContentCard
