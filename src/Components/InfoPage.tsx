import React from 'react'
import InfoHeader from './InfoHeader'
import InfoEpisodes from './InfoEpisodes'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Container } from '@mui/material'


const InfoPage = () => {

  interface dataTypes {
    title:string;
    description:string;
    episodes:Object[];
    image:string;
}

  const [animeInfo, setAnimeInfo] = React.useState<dataTypes[] | any>([])

  

  //getting the id from the params
  let params = useParams()

  let INFOPAGE_STRING = `https://c.delusionz.xyz/anime/gogoanime/info/${params.id}`

  const fetchInfodata = async () => {
    await axios.get(INFOPAGE_STRING)
    .then((response) => {
      setAnimeInfo(response.data)
  }).catch((error) => console.log(error))
  }
    
  


  React.useEffect(() => {
    fetchInfodata();
  }, [])

  

  return (
    <Container>
      <Box>
      <InfoHeader title={animeInfo.title} description={animeInfo.description} image={animeInfo.image} />
      <InfoEpisodes episodes={animeInfo.episodes} />

      </Box>

    </Container>
    
  )
}

export default InfoPage