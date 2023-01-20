import React, { FC } from 'react'
import '../Styles/SearchBar.css'

interface SearchProps { getQuery: Function}
const SearchBar: FC<SearchProps> = ({getQuery}) => {

  const inputRef = React.useRef<HTMLInputElement>(null);


  function handleSubmit(e:React.SyntheticEvent) {
    e.preventDefault()
    getQuery(inputRef.current?.value);
  }

  return (
    <form className='search-bar' onSubmit={handleSubmit} >
        <label htmlFor='search'></label>
        <input ref={inputRef} className='search-box' type='text' name='search' placeholder='Find your next show' ></input>
        <button className='search-btn' type='submit'>Search</button>
    </form>
  )
}

export default SearchBar