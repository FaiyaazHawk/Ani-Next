import React from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Container } from '@mui/material'



const EpisodePage = () => {

  const [episodeInfo, setEpisodeInfo] =React.useState<any>([])
  

  let params = useParams()

  let EPISODE_STRING = `https://c.delusionz.xyz/anime/gogoanime/watch/${params.id}`

  
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
    return <ReactPlayer  width={'50vw'} controls={true} key={episode.quality} url={episode.url}></ReactPlayer>
  })

  return (
    <Container>
      <Box textAlign={'center'} justifyContent={'center'}>
    
        <h1 className='episode-title'>Currently watching {params.id}</h1>
        {episodeInfo && videoElements}
  

      </Box>
    </Container>
  )
}

export default EpisodePage