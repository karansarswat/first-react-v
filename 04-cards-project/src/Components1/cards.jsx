import React from 'react'
import { Bookmark } from 'lucide-react'


const Cards = (props) => {
  return (
   <div>
     <div className="card">
       <div>
         <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark  size={16}/> </button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.jobTime}</span></h3>
          <h2>{props.job}</h2>
          <div className="tags">
            <h4>{props.post}</h4>
          </div>

        </div>
       </div>
        <div className="bottom">
        <div>
            <h3>{props.pay}</h3>
            <p>{props.country}</p>
          </div>
          <button>Apply Now</button>
        </div>
     </div>
     </div>
  )
}

export default Cards
