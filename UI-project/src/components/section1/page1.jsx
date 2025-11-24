import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1 = (props) => {
  return (
    <div className='py-10  items-center flex gap-10   h-[90vh] px-18'>
        <LeftContent />
        <RightContent data={props.data}/>
    </div>
  )
}

export default Page1