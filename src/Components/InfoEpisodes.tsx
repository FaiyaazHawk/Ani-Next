import React from 'react'
import { Await } from 'react-router-dom';


interface PropTypes {
    episodes:Object[]; 
}



const InfoEpisodes = ({ episodes }:PropTypes) => {

   console.log(episodes)

  return (
    <div className='episode-wrapper'>
        <h2>Episode List</h2>
        
    </div>
  )
}

export default InfoEpisodes