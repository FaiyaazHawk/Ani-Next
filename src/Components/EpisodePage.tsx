import React from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../Styles/EpisodePage.css'

const EpisodePage = () => {

  const [episodeInfo, setEpisodeInfo] =React.useState<any>([])
  

  let params = useParams()

  let EPISODE_STRING = `https://api.consumet.org/anime/gogoanime/watch/${params.id}`

  
  const fetchEpisodesources = async () => {
    await axios.get(EPISODE_STRING)
    .then((response) => {
      const data = Object.values(response.data.sources).filter((episode:any) => episode.quality === 'default') //pulling the link for 1080p stream from data
      setEpisodeInfo(data)
      
  }).catch((error) => console.log(error))
  }

  React.useEffect(() => {
    fetchEpisodesources();
  }, [])

  interface episodeTypes {
    url:string;
    quality:string;
  }

  const videoElements = episodeInfo.map((episode:episodeTypes)=> {
    return <ReactPlayer  width={'100vw'} controls={true} key={episode.quality} url={episode.url}></ReactPlayer>
  })

  return (
    <div className='video-player'>
      <h1 className='episode-title'>Currently watching {params.id}</h1>
      {episodeInfo && videoElements}
    </div>
  )
}

export default EpisodePage