import React from 'react'
import '../Styles/Card.css'

interface Proptypes {
    id:string;
    title:string;
    image:string;
    
}



const Card = ({id,title, image}:Proptypes) => {
  

  return (
    <a className='card-link' href={`/${id}`} >
        <div className='card-container'  style={{backgroundImage: `url(${image})`}}>
          <p className='card-body' >{title}</p>
        </div>
    </a>
    
  )
}

export default Card