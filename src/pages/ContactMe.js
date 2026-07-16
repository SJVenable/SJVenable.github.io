import React from 'react';
import styles from './ContactMe.module.css';

function ContactMe() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactContainer}>
        <h1 className={styles.h1}>Contact Me</h1>

        <div className={styles.profileSection}>
          <img src="../images/pfp.jpg" alt="Profile" className={styles.profilePic} />
          <p className={styles.intro}>
            I'm a 4th-year Computer Science with AI student at the University of Nottingham, having
            just finished my 13-month Software Engineering internship with IBM within the CICS AI 
            and testing teams. I'm looking for graduate opportunities starting in 2027, in Software Engineering, 
            AI and Machine Learning. I have a special interest in medical applications of technology, and other 
            areas which have a positive effect outside the company too. Contact me through any of the methods below for more information.
          </p>
        </div>

        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <h3>Phone</h3>
            <p><a href="tel:+447517692931">(+44) 7517 692931</a></p>
          </div>

          <div className={styles.contactItem}>
            <h3>Email</h3>
            <p><a href="mailto:sjvenable74@gmail.com">sjvenable74@gmail.com</a></p>
          </div>

          <div className={styles.contactItem}>
            <h3>LinkedIn</h3>
            <p><a href="https://www.linkedin.com/in/samuel-venable/" target="_blank" rel="noopener noreferrer">
              Samuel J Venable
            </a></p>
          </div>

          <div className={styles.cvButton}>
            <a href="../SJV-CV.pdf" download className={styles.cvLink}>Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
