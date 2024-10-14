import React from 'react';
import styles from './ContactMe.module.css';

function ContactMe() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.h1} >Contact Me</h1>

      <div className={styles.profileSection}>
        <img src="../images/IMG_9339.JPG" alt="Profile" className={styles.profilePic} />
        <div className={styles.intro}>
          <p>A 2nd year student at the University of Nottingham studying Computer Science with
            Artificial Intelligence. Open to working opportunities or project commissions.
            Feel free to contact me through any of the methods below for more information.</p>
        </div>
      </div>
      
      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <h3>Phone Number</h3>
          <p><a href="tel:07517692931">(+44) 7517692931</a></p>
        </div>

        <div className={styles.contactItem}>
          <h3>Email</h3>
          <p><a href="sjvenable74@gmail.com">sjvenable74@gmail.com</a></p>
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
