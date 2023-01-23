import React from 'react'
import '../Styles/Card.css'

interface Proptypes {
    id:string;
    title:string;
    image:string;
    url:string;
    setGlobalId:Function
}



const Card = ({id,title, image, url, setGlobalId}:Proptypes) => {
  

  return (
    <a className='card-link' href={`/${id}`} >
        <div className='card-container' onClick={()=> setGlobalId(id)} style={{backgroundImage: `url(${image})`}}>
          <p className='card-body' >{title}</p>
        </div>
    </a>
    
  )
}

export default Card