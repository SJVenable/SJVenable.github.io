import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <img src='../images/favicon.jpg' className={styles.logo}></img>
          </div>
            <ul className={styles.list}>
              <li>
                <Link to='/' className={styles.link}>Home</Link>
              </li>
              <li>
                <Link to='/Projects' className={styles.link}>Projects</Link>
              </li>
              <li>
                <Link to='/ContactMe' className={styles.link} >Contact Me</Link>
              </li>
              <img src='../images/pfp.jpg' className={styles.pfp} alt="Profile"></img>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar