import React from 'react'
interface Proptypes {
    id:string
}
const InfoPage = ({id}:Proptypes) => {
    
    let INFOPAGE_STRING = `https://api.consumet.org/anime/gogoanime/info/${id}`
    
  return (
    <div>InfoPage</div>
  )
}

export default InfoPage