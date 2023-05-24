import React from 'react'
import SearchBar from '../Components/SearchBar'
import Results from '../Components/Results'
import axios from 'axios'


const Search = () => {

  const[query, setQuery] = React.useState('')
  const[results, setResults] = React.useState<any[]>([])

  function getQuery(string: string) {
    setQuery(string.toLowerCase());
  }

  async function fetchResults(query: string) {
    await axios.get(`https://c.delusionz.xyz/anime/gogoanime/${query}`)
      .then((response) => {
      let array = Object.values(response.data.results)
      setResults(array)
  }).catch((error) => console.log(error))
  }

  React.useEffect(() => {
    fetchResults(query)
  }, [query])

  return (
    <div className='search-page'>
      <SearchBar getQuery={getQuery}/>
      <Results results={results}/>

    </div>
  )
}

export default Search