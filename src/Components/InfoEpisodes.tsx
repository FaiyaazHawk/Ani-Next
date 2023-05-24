import React from 'react'
import { Button } from '@mui/material';


interface PropTypes {
    episodes:Object[] | any; 
}

const InfoEpisodes = ({ episodes }:PropTypes) => {

interface EpisodeTypes {
  id:string;
  number:string;
  url:string;
}

  return (
    <div className='episode-wrapper' >
        {(episodes) && episodes.map((episode:EpisodeTypes)=>{
          return <Button variant='outlined' className='episode-item' key={episode.id} href={`/video/${episode.id}`} >Episode {episode.number}</Button>
        })}
    </div>
  )
}

export default InfoEpisodes