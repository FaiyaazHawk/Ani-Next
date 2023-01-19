import React from 'react'
import axios, { AxiosResponse } from 'axios'


const Cards = () => {
    const [topTen, setTopTen] = React.useState<AxiosResponse | [] >([])
    
    //fetch top 10 results from top-airing
    const fetchMostPopular = () => {
        axios.get('https://api.consumet.org/anime/gogoanime/top-airing')
        .then((response) => {
            console.log(response);
            setTopTen(response.data.results)
        }).catch((error) => console.log(error))
    }

    React.useEffect(() => {
        fetchMostPopular();
    }, [])

  return (
    <div>Cards</div>
  )
}

export default Cards