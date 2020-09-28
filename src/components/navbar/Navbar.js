import React, { useEffect, useState } from 'react'
import styles from './styles/Navbar.module.css'
import { FiGift } from 'react-icons/fi'
import { FaBell } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { ImSearch } from "react-icons/im"
import { Link, Redirect, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchResult from '../search-result/SearchResult'

function Navbar() {
  const [show, handleShow] = useState(false)
  const movies = useSelector(state => state.allMovies?.movieCollection ? state.allMovies?.movieCollection : [])
  const [search, setSearch] = useState([])
  const [searchActive, setSearchActive] = useState(false)

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
      setSearchActive(false)
      return
    }
    setSearchActive(true)
    setSearch(uniqueMovies.filter(movie => {
      const name = movie.name || movie.title
      return name.toLowerCase().includes(e.target.value.toLowerCase())
    }))
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])

  return (
    <div>
      <div className={`${styles.navbar} ${show && styles.navbarColor}`}>
        <div className={styles['flex-container']}>
          <div className={styles['flex-container-logo']}>
            <NavLink className={styles.link} to="/" className={styles['netflix-logo']}>
              <img
                className={styles.logo}
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                alt="Netflix Logo"
              />
            </NavLink>
            <div className={styles.links}>
              <NavLink className={styles.link} to="/" exact activeStyle={{fontWeight: "bold"}}>Home</NavLink>
              <NavLink className={styles.link} to={{ pathname: '/action/', state: {category: 'ActionMovies', title: 'Action'}}} exact activeStyle={{ fontWeight: "bold" }}>Action</NavLink>
              <NavLink className={styles.link} to={{ pathname: '/horror/', state: { category: 'HorrorMovies', title: 'Horror' } }} exact activeStyle={{ fontWeight: "bold" }}>Horror</NavLink>
              <NavLink className={styles.link} to={{ pathname: '/comedy/', state: { category: 'ComedyMovies', title: 'Comedy'}}} exact activeStyle={{ fontWeight: "bold" }}>Comedy</NavLink>
              <NavLink className={styles.link} to={{ pathname: '/top_rated/', state: { category: 'TopRated', title: 'Top rated'}}} exact activeStyle={{ fontWeight: "bold" }}>Top rated</NavLink>
            </div>
          </div>
          <div className={styles['search-container']}>
            <ImSearch className={`${styles.icons} ${styles['search-icon']}`} />
            {searchActive ?
              <Redirect className={styles.link} to="/search"/> : <Redirect to="/"/>
            }
              <input type='text'
                placeholder='Title, people, genres'
                className={styles.input}
                onChange={handleSearch}
              />
            <a className={`${styles.children} ${styles.link}`}>CHILDREN</a>
            <FiGift className={styles.gift} />
            <FaBell className={styles.icons} />
            <div>
              <img
                className={styles.avatar}
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Netflix Logo"
              />
            </div>
            <MdArrowDropDown className={styles.dropdown} />
          </div>
        </div>
      </div>
      {searchActive ? <SearchResult movies={search} /> : null}
    </div>
  )
}

export default Navbar

