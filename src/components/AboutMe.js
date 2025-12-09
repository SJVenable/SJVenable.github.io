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
        <ExperienceBox picSide='right' src='../images/IBM-logo.png' title='Software Engineer Intern' link='https://www.ibm.com/docs/en/zos-basic-skills?topic=zos-introduction-cics'
        text="I am currently working within CICS, mostly in the Customer in Production (CiP) testing team, and partly with the AI integration team. In CiP, we test the product as a customer would do, 
        using it alongside other technologies (like our mock bank systems) to validate its compatability, and advising the development team on issues that are found. 
        I've set up transaction processing systems from a bank’s perspective, providing feedback on how the process could be improved from the customer’s point of view, 
        and have created an ID generation program with customizable constraints as part of a project to improve the reliability of client connectivity.  In the CICS AI team, I 
        have gained experience with IBM’s AI offerings, using agents and the latest python libraries and frameworks to learn and research how AI might be used effectively in out department."></ExperienceBox>
      </div>
      <div className={styles.boxesContainer}>
        <ExperienceBox picSide='left' src='../images/twist-logo.png' title='Java Developer at TwistMC' link='https://twistmc.net/'
        text="Worked developing new features and fixing issues with a network multiplayer Minecraft server,
        along with a team of developers. I wrote code for new features, gamemodes, functionality, and tested them both by myself and
         by others, before having them released and maintaining them where issues arose. I've been working with TwistMC
        on and off for 5 years, and have improved my ability in OO and Java hugely as a result - alongside 
        the skills to plan, design and test a project mostly independently."></ExperienceBox>
      </div>
      <div className={styles.boxesContainer}>
        <ExperienceBox picSide='right' src='../images/nottingham_logo.png' title='University of Nottingham'
        link="https://www.nottingham.ac.uk/studywithus/ugstudy/courses/UG/Computer-Science-and-Artificial-Intelligence-with-Year-in-Industry-BSc-Hons-U6UCMPAIY.html#:~:text=Course%20overview&text=You'll%20take%20part%20in,companies%20have%20offices%20in%20Nottingham."
        text='3rd year student studying Computer Science with Artificial Intelligence.
        Currently predicted First Class Honours, with a 74% average grade across all modules so far. Top Relevant Modules: Computer Fundamentals (90%),
        System Architecture (83%), Fundamentals of Artificial Intelligence (80%), Maths for Computer Scientists I (76%) / II (78%).
        '></ExperienceBox>
      </div>
      <div className={styles.boxesContainer}>
        <ExperienceBox picSide='left' src='../images/IBM-logo.png' title='IBM Work Experience'
        link="https://www.ibm.com/uk-en" 
        text='Completed a very informative week of work experience at Hursley IBM. Independently produced a JavaScript program to improve testing efficiency. More details available personally.
        '></ExperienceBox>
      <div className={styles.boxesContainer}>
        <ExperienceBox picSide='right' src='../images/ocr-logo.png' title='Qualifications'
        link=""
        text="A Levels: Maths (A*), Computer Science (A*), Further Maths (A), Popular Music and Jazz Studies (A*).
        GCSEs: 8 A*s (including Maths & English), 2 As."
        ></ExperienceBox>
      </div>
      </div>
    </div>
  )
}

export default AboutMe