import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div>
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <img src='../images/favicon.jpg' className={styles.logo}></img>
          </div>
            <ul className={styles.list}>
              <li>
                <a href='google.com' className={styles.link} >Home</a>
              </li>
              <li>
                <a className={styles.link} >Projects</a>
              </li>
              <li>
                <a className={styles.link} >Contact Me</a>
              </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar