import { AxiosResponse } from 'axios';
import React from 'react'

interface PropTypes {
    title:string;
    description:string;
    
    image:string;
    
}

interface dataTypes {
    
}


const InfoHeader = ({title, description, image}:PropTypes) => {

    
    
  return (
    <div className='infoHeader'>
        <img src={image} alt={title} />
        
    </div>
  )
}

export default InfoHeader