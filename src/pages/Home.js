import React from 'react'
import SlideshowTitle from '../components/SlideshowTitle'
import styles from './Home.module.css'
import AboutMe from '../components/AboutMe'

function Home() {
  return (
    <div className={styles.home}>
        <SlideshowTitle></SlideshowTitle>
        <AboutMe></AboutMe>
    </div>
  )
}

export default Home;