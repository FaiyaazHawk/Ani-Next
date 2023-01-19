import React from 'react'
import SearchBar from '../Components/SearchBar'
import Results from '../Components/Results'
import '../Styles/Search.css'

const Search = () => {
  return (
    <div className='search-page'>
      <SearchBar />
      <Results />

    </div>
  )
}

export default Search