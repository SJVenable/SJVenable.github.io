import React, { useEffect, useState } from 'react';
import styles from './SlideshowTitle.module.css';

function SlideshowTitle() {

  const pictures = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      <header className={styles.textbox}>
        <h1 className={styles.title}>Samuel J Venable</h1>
        <h2 className={styles.subheading}>Java Developer</h2>
      </header>
      <div className={styles.slides}>
        {pictures.map((pic, index) => (
          <img 
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : index === previousIndex ? styles.previous : ''}`}
            src={`/images/${pic}.jpg`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SlideshowTitle;
