import React from 'react'
import Card from './Card'
import axios from 'axios'

import '../Styles/Cards.css'




const Cards = () => {

    

    const [topTen, setTopTen] = React.useState<any[]>([])
    
    
    //fetch top 10 results from top-airing
    const fetchMostPopular = async () => {
       await axios.get('https://c.delusionz.xyz/anime/gogoanime/top-airing')
        .then((response) => {
            let array = Object.values(response.data.results)
            setTopTen(array)
        }).catch((error) => console.log(error))
    }

    interface animeTypes {
        id:string;
        title:string;
        image:string;
        

    }

    const cardElements = topTen.map((anime: animeTypes)=> {
        return <Card key={anime.id} id={anime.id} title={anime.title} image={anime.image} />
    })
   


    React.useEffect(() => {
        void fetchMostPopular();
    }, [])

    

  return (
    <div className='cards-panel'>
        {cardElements}
    </div>
  )
}

export default Cards