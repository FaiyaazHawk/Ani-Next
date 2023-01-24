import React from 'react'
import InfoHeader from './InfoHeader'
import InfoEpisodes from './InfoEpisodes'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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

  let INFOPAGE_STRING = `https://api.consumet.org/anime/gogoanime/info/${params.id}`

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
    <div className='infopage-body' >
      <InfoHeader title={animeInfo.title} description={animeInfo.description} image={animeInfo.image} />
      <InfoEpisodes episodes={animeInfo.episodes} />
    </div>
  )
}

export default InfoPage