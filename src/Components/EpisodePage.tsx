import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EpisodePage = () => {

  const [episodeInfo, setEpisodeInfo] =React.useState([])

  let params = useParams()

  let EPISODE_STRING = `https://api.consumet.org/anime/gogoanime/watch/${params.id}`

  const fetchEpisodesources = async () => {
    await axios.get(EPISODE_STRING)
    .then((response) => {
      setEpisodeInfo(response.data.sources)
  }).catch((error) => console.log(error))
  }

  React.useEffect(() => {
    fetchEpisodesources();
  }, [])

  console.log(episodeInfo)

  return (
    <div>EpisodePage</div>
  )
}

export default EpisodePage