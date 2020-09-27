import React, { useState } from 'react'
import styles from './styles/searchInput.module.css'
import { useSelector } from 'react-redux'
import SearchResult from '../search-result/SearchResult'

const SearchInput = () => {
  const movies = useSelector(state => state.allMovies?.movieCollection ? state.allMovies?.movieCollection : [])
  const [search, setSearch] = useState([])

  function getUniqueMovies(movies, key) {
    const unique = movies.map(movie => movie[key])
      .map((movie, i, final) => final.indexOf(movie) === i && i)
      .filter((movie) => movies[movie]).map(movie => movies[movie]);
    return unique;
  }

  const uniqueMovies = getUniqueMovies(movies, 'id')

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setSearch([])
      return
    }

    setSearch(uniqueMovies.filter(movie => {
      const name = movie.name || movie.title
      return name.toLowerCase().includes(e.target.value.toLowerCase())
    }))
  }

  return (
    <div>
      <input type='text'
        placeholder='Title, people, genres'
        className={styles.input}
        onChange={handleSearch}
      />
      <SearchResult movies={search} />
    </div>
  )
}

export default SearchInput
