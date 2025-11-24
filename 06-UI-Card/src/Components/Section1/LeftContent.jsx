import React from 'react'
import Nav from './Nav'
import Herotext from './Herotext'
import LeftButton from './LeftButton'
import Icon from './icon'

const LeftContent = () => {
  return (
    <div className=' relative p-6 w-2/4  bg-violet-100 h-[90vh] rounded-lg  flex flex-col  justify-center items-center'>
    <Nav />
    <Herotext />
    <LeftButton />
    <Icon />

    </div>
  )
}

export default LeftContent
