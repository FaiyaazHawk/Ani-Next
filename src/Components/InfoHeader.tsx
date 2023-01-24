
import React from 'react'
import '../Styles/InfoHeader.css'
interface PropTypes {
    title:string;
    description:string;
    
    image:string;
    
}




const InfoHeader = ({title, description, image}:PropTypes) => {

    
    
  return (
    <div className='infoHeader'>
            <img className='info-image' src={image} alt={title} />
        <div className="info-details">
            <h2 className='info-title'>{title}</h2>
            <p className='info-description'>{description}</p>
        </div> 
    </div>
  )
}

export default InfoHeader