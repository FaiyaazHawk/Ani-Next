import React from 'react'

interface Proptypes {
    title:string;
    image:string;
    url:string;
}

const Card = ({title, image, url}:Proptypes) => {
  return (
    <div >
        <p>{title}</p>
        <p>{image}</p>
        <p>{url}</p>
    </div>
  )
}

export default Card