import React from 'react'
import Nav from './nav'
import Page1 from './page1'

const Section1 = (props) => {
 
  return (
    <div className="w-full h-screen ">
      <Nav />
      <Page1  data={props.data} />
    </div>
  )
}

export default Section1
