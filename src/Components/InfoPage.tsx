import React from 'react'
import InfoHeader from './InfoHeader'
import InfoEpisodes from './InfoEpisodes'
import { useParams } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'

const InfoPage = () => {

  const [animeInfo, setAnimeInfo] = React.useState<AxiosResponse | any[]>([])

  //getting the id from the params
  let params = useParams()

  let INFOPAGE_STRING = `https://api.consumet.org/anime/gogoanime/info/${params.id}`

  const fetchInfodata = async () => {
    await axios.get(INFOPAGE_STRING)
    .then((response) => {
      setAnimeInfo(response)
  }).catch((error) => console.log(error))
  }
    
  

  React.useEffect(() => {
    fetchInfodata();
  })

  return (
    <div className='infopage-body' >
      <InfoHeader />
      <InfoEpisodes />
    </div>
  )
}

export default InfoPage