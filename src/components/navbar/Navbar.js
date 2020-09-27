import React, { useEffect, useState, useReducer } from 'react'
import styles from './styles/Navbar.module.css'
import { FiGift } from 'react-icons/fi'
import { FaBell } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { ImSearch } from "react-icons/im"
import { useSelector } from 'react-redux'

function Navbar() {
  const [show, handleShow] = useState(false)
  const storeInfo = useSelector(state => state.movies?.movieCollection ? state.movies?.movieCollection : [])
// const [state, dispatch] = useReducer(reducer, initialState, init)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])

  return (
    <div className={`${styles.navbar} ${show && styles.navbarColor}`}>
      <div className={styles['flex-container']}>
        <div className={styles['flex-container-logo']}>
          <img
            className={styles.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
            alt="Netflix Logo"
          />
          <div className={styles.links}>
            <a>Home</a>
            <a>Action</a>
            <a>Horror</a>
            <a>Comedy</a>
            <a>Top rated</a>
          </div>
        </div>
        <div className={styles['search-container']}>
          <ImSearch className={`${styles.icons} ${styles['search-icon']}`} />
          <input type='text' placeholder='Title, people, genres' className={styles.input} />
          <a className={styles.children}>CHILDREN</a>
          <FiGift className={styles.icons} />
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
  )
}

export default Navbar

