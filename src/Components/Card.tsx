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
        <div className='card-container'>
        <p >{title}</p>
        <img className='card-image' src={image} alt="#" />
    </div>
    </a>
    
  )
}

export default Card