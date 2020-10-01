/* eslint-disable  import/no-named-as-default-member */
/* eslint-disable  import/no-named-as-default */

import React, { useEffect, useState } from 'react';
import { FiGift } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { ImSearch } from 'react-icons/im';
import { Redirect, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './styles/Navbar.module.css';
import SearchResult from '../../pages/search-result-page/SearchResult';

function Navbar() {
  const [show, handleShow] = useState(false);
  const moviesData = useSelector(state => state.allMovies);
  const movies = moviesData ? (moviesData.movieCollection) : [];
  const [search, setSearch] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  const getUniqueMovies = (movies, key) => {
    const unique = movies.map(movie => movie[key])
      .map((movie, i, final) => final.indexOf(movie) === i && i)
      .filter(movie => movies[movie]).map(movie => movies[movie]);
    return unique;
  }

  const clearInputField = () => {
    setSearch([])
  }

  const uniqueMovies = getUniqueMovies(movies, 'id');

  const handleSearch = e => {
    
    if (e.target.value === '') {
      setSearch([]);
      setSearchActive(false);
      return;
    }
    setSearchActive(true);
    setSearch(uniqueMovies.filter(movie => {
      const name = movie.name || movie.title;
      return name.toLowerCase().includes(e.target.value.toLowerCase());
    }));
  };

  useEffect(() => {
    /* eslint-disable no-unused-expressions */
    window.addEventListener('scroll', () => {
      window.scrollY > 95 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <>
      <div className={`${styles.navbar} ${show && styles.navbarColor}`}>
        <div className={styles['flex-container']}>
          <div className={styles['flex-container-logo']}>
            <NavLink to="/" className={styles['netflix-logo']}>
              <img
                className={styles.logo}
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                alt="Netflix Logo"
              />
            </NavLink>
            <div className={styles.links}>
              <NavLink className={styles.link} onClick={clearInputField} to="/" exact activeStyle={{ fontWeight: 'bold' }}>Home</NavLink>
              <NavLink className={styles.link} onClick={clearInputField} to={{ pathname: '/action/', state: { category: 'ActionMovies', title: 'Action' } }} exact activeStyle={{ fontWeight: 'bold' }}>Action</NavLink>
              <NavLink className={styles.link} onClick={clearInputField} to={{ pathname: '/horror/', state: { category: 'HorrorMovies', title: 'Horror' } }} exact activeStyle={{ fontWeight: 'bold' }}>Horror</NavLink>
              <NavLink className={styles.link} onClick={clearInputField} to={{ pathname: '/comedy/', state: { category: 'ComedyMovies', title: 'Comedy' } }} exact activeStyle={{ fontWeight: 'bold' }}>Comedy</NavLink>
              <NavLink className={styles.link} onClick={clearInputField} to={{ pathname: '/top_rated/', state: { category: 'TopRated', title: 'Top rated' } }} exact activeStyle={{ fontWeight: 'bold' }}>Top rated</NavLink>
            </div>
          </div>
          <div className={styles['search-container']}>
            <ImSearch className={`${styles.icons} ${styles['search-icon']}`} />
            {searchActive
              ? <Redirect className={styles.link} to="/search" /> : <Redirect to="/" />}
            <input
              type="text"
              placeholder="Title, people, genres"
              className={styles.input}
              onChange={handleSearch}
            />
            <p className={`${styles.children} ${styles.link}`}>CHILDREN</p>
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
    </>
  );
}

export default Navbar;
