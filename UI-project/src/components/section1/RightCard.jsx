import React from 'react'
import RightCardContentCard from './RightCardContentCard'

const RightCard = (props) => {
 
  
  return (
    <div id='right' className=' relative shrink-0 overflow-hidden h-full w-50 rounded-4xl'>
      <img  className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContentCard   id={props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default RightCard
