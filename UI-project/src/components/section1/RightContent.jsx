import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  
  return (
    <div className='h-full w-2/3 p-6 flex flex-nowrap gap-6 overflow-x-auto'>
     {props.data.map(function(item,idx) {
      return <div key={idx} >
        <RightCard id={idx+1}  img={item.img} tag={item.tag} color={item.color} />
      </div>
     })}
    </div>
  )
}

export default RightContent
