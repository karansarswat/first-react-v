import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className='card'>
        <img src={props.image} alt="" />
        <div className='top'>
          
          <h2>{props.name}</h2>
          <h4>{props.example}</h4>
        </div>
        <div className='bottom'>
          <div className='searchbar'>  
          <input type="text"  placeholder={props.placeholder} name="" id="" />
          </div>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Card
