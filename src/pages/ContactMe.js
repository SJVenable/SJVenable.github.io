import React from 'react';
import styles from './ContactMe.module.css';

function ContactMe() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.h1} >Contact Me</h1>

      <div className={styles.profileSection}>
        <img src="../images/pfp.jpg" alt="Profile" className={styles.profilePic} />
        <div className={styles.intro}>
          <p>I'm a Software Engineer Intern at IBM for 12 months within the CICS testing team, and
            a 3rd(/4) year student at the University of Nottingham studying Computer Science with
            Artificial Intelligence. I'm looking for summer internship opportunities for 2026, with a special 
            interest in software engineering.
            Contact me through any of the methods below for more information.</p>
        </div>
      </div>
      
      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <h3>Phone Number</h3>
          <p><a href="">(+44) 7517692931</a></p>
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
          <p><a href="../SJV-CV.pdf" download className={styles.cvLink}>Download CV</a></p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
