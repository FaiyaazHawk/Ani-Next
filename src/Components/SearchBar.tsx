import React from 'react'
import '../Styles/SearchBar.css'

const SearchBar = () => {
  return (
    <form className='search-bar'>
        <label htmlFor='search'></label>
        <input className='search-box' type='text' name='search' placeholder='Find your next show'></input>
        <button className='search-btn' type='submit'>Search</button>
    </form>
  )
}

export default SearchBar