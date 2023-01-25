import React, {FC} from 'react'
import Card from './Card'
import '../Styles/Results.css'

interface Props {results: any[]}
const Results: FC<Props> = ({results}) => {

  const resultElements = results.map((result) =>{
    return <Card key={result.id} id={result.id} title={result.title} image={result.image} />
  })

  return (
    <div className='results'>
      {resultElements}
    </div>
  )
}

export default Results