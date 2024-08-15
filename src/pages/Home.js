import React from 'react'
import Navbar from '../components/Navbar'
import SlideshowTitle from '../components/SlideshowTitle'
import styles from './Home.module.css'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <div className={styles.home}>
        <Navbar></Navbar>
        <SlideshowTitle></SlideshowTitle>
        <AboutMe></AboutMe>
    </div>
  )
}
