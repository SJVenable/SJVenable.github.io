import React from 'react'
import styles from './AboutMe.module.css'
import ExperienceBox from './about-components/ExperienceBox'

function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>About Me</h1>
      </div>
      <div className={styles.boxesContainer}>
        <ExperienceBox picSide='left' src='../images/twist-logo.png' title='Java Developer at TwistMC' 
        text='Worked over 5 years developing new features and fixing issues with a network multiplayer Minecraft server,
        along with a team of developers.'></ExperienceBox>
      </div>
    </div>
  )
}

export default AboutMe