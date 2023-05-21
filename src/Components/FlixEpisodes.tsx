import React from 'react'
import '../Styles/InfoEpisodes.css'

interface PropTypes {
    episodes:Object[] | any; 
}

const FlixEpisodes = ({ episodes }:PropTypes) => {

interface EpisodeTypes {
  id:string;
  number:string;
  url:string;
}

  return (
    <div className='episode-wrapper'>
        {(episodes) && episodes.map((episode:EpisodeTypes)=>{
          return <a className='episode-item' key={episode.id} href={`/flix/${episode.id}`} >Episode {episode.number}</a>
        })}
    </div>
  )
}

export default FlixEpisodes;