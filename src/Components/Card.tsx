import React from 'react'
import '../Styles/Card.css'

interface Proptypes {
    title:string;
    image:string;
    url:string;
}

const Card = ({title, image, url}:Proptypes) => {
  return (
    <a className='card-link' href={url}>
        <div className='card-container' style={{backgroundImage: `url(${image})`}}>
        <p className='card-body' >{title}</p>
    </div>
    </a>
    
  )
}

export default Card